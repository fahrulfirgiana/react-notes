import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";
import content from "../utils/content";
import {
  Box,
  Button,
  HStack,
  Input,
  Separator,
  Text,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { ThemeContext } from "../context/ThemeContext";

function RegisterInput({ register }) {
  const { locale } = React.useContext(LocaleContext);
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");
  const { theme } = React.useContext(ThemeContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Semua kolom wajib diisi!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords tidak cocok!");
      return;
    }
    register({ name, email, password });
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
          Register
        </Text>
        <Text color="#a3aed0" fontSize="16px" fontWeight="medium">
          Daftar untuk membuat akun baru!
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
      >
        <Box display="flex" flexDirection="column" gap="2">
          <Field
            label="Name"
            required
            color={theme === "dark" ? "white" : "#1b254b"}
          >
            <Input
              borderColor="#242c4b"
              focusBorderColor="blue.500"
              rounded="lg"
              type="text"
              name="name"
              id="name"
              placeholder={content.register[locale].name}
              value={name}
              onChange={handleNameChange}
              aria-label="Name input"
              required
            />
          </Field>
        </Box>
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
              placeholder={content.register[locale].email}
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
            <Input
              borderColor="#242c4b"
              focusBorderColor="blue.500"
              rounded="lg"
              type="password"
              name="password"
              id="password"
              placeholder={content.register[locale].password}
              value={password}
              onChange={handlePasswordChange}
              aria-label="Password input"
              required
            />
          </Field>
        </Box>
        <Box display="flex" flexDirection="column" gap="2">
          <Field
            label="Confirm Password"
            required
            color={theme === "dark" ? "white" : "#1b254b"}
          >
            <Input
              borderColor="#242c4b"
              focusBorderColor="blue.500"
              rounded="lg"
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder={content.register[locale].confirmPassword}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              aria-label="Confirm Password input"
              required
            />
          </Field>
        </Box>
        <Button rounded="lg" bg="blue.700" type="submit" my="2">
          Register
        </Button>
      </Box>
      <Box as="p" color="#a3aed0" fontSize="14px" display="flex" flexDirection="row" gap="2px">
        {content.register[locale].registerLink}
        <Link to="/login">
          <Box color="blue.600">{content.register[locale].link}</Box>
        </Link>
      </Box>
    </Box>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
