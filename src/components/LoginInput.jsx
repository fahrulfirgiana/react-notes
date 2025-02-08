import PropTypes from "prop-types";
import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";
import content from "../utils/content";
import {
  Box,
  Button,
  Highlight,
  Input,
  Text,
  HStack,
  Separator,
  Stack,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "./ui/password-input";
import { ThemeContext } from "../context/ThemeContext";

function LoginInput({ login }) {
  const { locale } = React.useContext(LocaleContext);
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const { theme } = useContext(ThemeContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Email dan password tidak boleh kosong!");
      return;
    }
    login({ email, password });
  };

  return (
    <Box>
      <Box
        display="flex"
        color={theme === "dark" ? "white" : "#1b254b"}
        flexDirection="column"
        gap="2px"
      >
        <Text fontSize="36px" fontWeight="semibold">
          Login
        </Text>
        <Text color="#a3aed0" fontSize="16px" fontWeight="medium">
          Masukkan email dan kata sandi Anda untuk masuk!
        </Text>
      </Box>
      <HStack my="14px">
        <Separator flex="1" borderColor="#242c4b" />
        <Text fontSize="16px" color={theme === "dark" ? "white" : "#1b254b"} flexShrink="0">
          NoteApp
        </Text>
        <Separator flex="1" borderColor="#242c4b" />
      </HStack>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        gap="5"
        onSubmit={onSubmitHandler}
        className="form"
      >
        <Box display="flex" flexDirection="column" gap="2">
          <Field
            label="Email"
            required
            color={theme === "dark" ? "white" : "#1b254b"}
          >
            <Input
              borderColor="#242c4b"
              focusBorderColor="blue.500"
              rounded="lg"
              type="email"
              name="email"
              id="email"
              placeholder={content.login[locale].emailPlaceholder}
              value={email}
              onChange={handleEmailChange}
              aria-label="Email input"
              required
            />
          </Field>
        </Box>
        <Box display="flex" flexDirection="column" gap="2">
          <Field
            label="Password"
            required
            color={theme === "dark" ? "white" : "#1b254b"}
          >
            <PasswordInput
              borderColor="#242c4b"
              focusBorderColor="blue.500"
              rounded="lg"
              type="password"
              name="password"
              id="password"
              placeholder={content.login[locale].passwordPlaceholder}
              value={password}
              onChange={handlePasswordChange}
              aria-label="Password input"
              required
              mb="2"
            />
          </Field>
        </Box>
        <Button rounded="lg" colorScheme="white" bg="blue.700" type="submit" className="sign" my="2">
          Sign in
        </Button>
      </Box>
      <Box as="p" color="#a3aed0" fontSize="14px" display="flex" flexDirection="row" gap="2px">
        {content.login[locale].registerLink}
        <Link to="/register">
          {" "}
          <Box color="blue.600"> {content.login[locale].link}</Box>
        </Link>
      </Box>
    </Box>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
