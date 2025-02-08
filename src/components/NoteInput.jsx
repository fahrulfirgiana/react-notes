import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaPaperPlane } from "react-icons/fa";
import { LocaleContext } from "../context/LocaleContext";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import content from "../utils/content";

function NoteInput({ addNote }) {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onTitleChangeEventHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await addNote({ title, body });
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Gagal menambahkan catatan:", error);
      setLoading(false);
    }
  };

  return (
    <Box as="form" p="46px" h="100vh" onSubmit={onSubmitEventHandler}>
      <Input
        w="100%"
        size="2xl"
        textStyle="7xl"
        p="0px"
        placeholder={content.noteInput[locale].titlePlaceholder}
        value={title}
        onChange={onTitleChangeEventHandler}
        _placeholder={{
          fontSize: "64px",
          color: "gray.400",
          fontStyle: "italic",
        }}
        variant="unstyled"
        mb="24px"
      />
      <Textarea
        w="100%"
        size="xl"
        textStyle="xl"
        p="0px"
        placeholder={content.noteInput[locale].bodyPlaceholder}
        value={body}
        onChange={onBodyChangeEventHandler}
        _placeholder={{
          fontSize: "26px",
          color: "gray.500",
          fontStyle: "italic",
        }}
        variant="unstyled"
      />
      <Button
        type="submit"
        isLoading={loading}
        colorScheme="blue"
        leftIcon={<FaPaperPlane />}
        mb="20px"
      >
        {content.noteInput[locale].addButton}
      </Button>
    </Box>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
