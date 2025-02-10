import React, { useEffect, useState, useContext } from "react";
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
import { Grid, GridItem, Box, Button, Image } from "@chakra-ui/react";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import PropTypes from "prop-types";
import { ThemeContext } from "./context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import loginImage from './assets/img/auth/Login.png';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);

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
      <Grid templateColumns="repeat(6, 1fr)" height="100vh" overflow="hidden">
        <GridItem
          as="main"
          colSpan={{ base: 6, lg: 3, xl: 3 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bg={theme === "dark" ? "#0b1437" : "white"}
        >
          <LocaleProvider>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
          </LocaleProvider>
        </GridItem>

        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 3, xl: 3 }}
          bg={theme === "dark" ? "#121212" : "white"}
          height="100vh"
          overflow="hidden"
          position="relative"
        >
          <Image
            src={loginImage}
            alt="Sidebar Image"
            width="100%"
            height="100%"
            objectFit="cover"
            borderBottomLeftRadius="90px"
            display={{ base: "none", lg: "block" }}
          />
        </GridItem>

        <Box
          position="fixed"
          bottom="32px"
          right="32px"
          zIndex="1000"
          display="flex"
        >
          <Button
            aria-label="Toggle Theme"
            borderRadius="12px"
            bg="gray.300"
            _hover={{ bg: "gray.400" }}
            color="black"
            w="56px"
            h="56px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.25)"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
        </Box>
      </Grid>
    );
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 1, xl: 1 }}
        minHeight={{ lg: "100vh" }}
      >
        <Navigation logout={onLogout} name={authedUser.name} />
      </GridItem>
      <GridItem
        as="main"
        bg={theme === "dark" ? "#121212" : "white"}
        colSpan={{ base: 6, lg: 5, xl: 5 }}
      >
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
      </GridItem>
    </Grid>
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
