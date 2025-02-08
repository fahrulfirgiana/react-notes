import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";
import { Box } from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";

function RegisterPage() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <Box
      w={{ base: "83%", md: "63%", xl: "53%" }}
      p="12"
      m="0"
      rounded="lg"
      bg={theme === "dark" ? "#0b1437" : "white"}
    >
      <RegisterInput register={onRegisterHandler} />
    </Box>
  );
}

export default RegisterPage;
