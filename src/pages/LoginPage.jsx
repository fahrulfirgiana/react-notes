import React, { useContext } from "react";
import LoginInput from "../components/LoginInput";
import Navbar from "../components/Navbar";
import { login } from "../utils/api";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";

function LoginPage({ loginSuccess }) {
    const { theme } = useContext(ThemeContext);
  
  async function onLogin({ email, password }) {
    try {
      const { error, data } = await login({ email, password });
      if (error) {
        alert("Login gagal! Periksa email dan password Anda.");
      } else {
        loginSuccess(data);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Terjadi kesalahan pada server.");
    }
  }

  return (
      <Box w={{ base: "83%", md: "63%", xl: "53%" }} p="12" m="0" rounded="lg" bg={theme === "dark" ? "#0b1437" : "white"}>
        <LoginInput login={onLogin} />
      </Box>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
