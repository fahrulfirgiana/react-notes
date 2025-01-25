import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArsipPage from "./pages/ArsipPage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./components/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged , putAccessToken } from "./utils/api";

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
  }, []); //

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
    putAccessToken('');  
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="contact-app">
        <header className="contact-app__header">
          <h1>Aplikasi Kontak</h1>
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navigation logout={onLogout} name={authedUser.name}/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/add-note" element={<AddPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
