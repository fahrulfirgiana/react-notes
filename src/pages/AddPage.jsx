import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";
import { Box } from "@chakra-ui/react";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <Box as="section" h="100vh">
      <Box p="41px">
        <NoteInput addNote={onAddNoteHandler} />
      </Box>
    </Box>
  );
}

export default AddPage;
