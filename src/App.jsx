import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFoundPage from "./components/NotFoundPage";
import { LocaleProvider } from "./context/LocaleContext";
import { ThemeProvider } from "./context/ThemeContext";
import AddPage from "./pages/AddPage";
import ArsipPage from "./pages/ArsipPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import PropTypes from "prop-types";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const { error, data } = await getUserLogged();
      setInitializing(false);
      if (error) {
        console.error("Gagal mengambil data user", data);
      } else {
        setAuthedUser(data);
      }
    }

    fetchUser();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { error, data } = await getUserLogged();
    if (error) {
      console.error("Gagal mengambil data user", data);
    } else {
      setAuthedUser(data);
    }
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="note-app container">
        <header className="contact-app__header">
          
        </header>
        <main>
          <LocaleProvider>
            <ThemeProvider>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </ThemeProvider>
          </LocaleProvider>
        </main>
      </div>
    );
  }

  return (
    <LocaleProvider>
      <ThemeProvider>
        <div className="app-container">
          <Navigation logout={onLogout} name={authedUser.name} />
          <main>
            <Routes>
              <Route
                path="/"
                element={<HomePage logout={onLogout} name={authedUser.name} />}
              />
              <Route path="/arsip" element={<ArsipPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/add-note" element={<AddPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

HomePage.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default App;
