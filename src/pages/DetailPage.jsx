import React, { useEffect, useState, useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import NoteDetail from "../components/NoteDetail";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
import { Box, Button } from "@chakra-ui/react";
import { ThemeContext } from "@/context/ThemeContext";
import Navbar from "../components/Navbar";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { error, data } = await getNote(id);
        if (error) {
          setError("Note not found");
        } else {
          setNote(data);
        }
      } catch (err) {
        setError("Failed to load note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const archiveHandler = async () => {
    try {
      if (note.archived) {
        await unarchiveNote(id);
      } else {
        await archiveNote(id);
      }
      navigate("/");
    } catch (error) {
      console.error("Failed to archive/unarchive note");
    }
  };

  const deleteHandler = async () => {
    try {
      await deleteNote(id);
      navigate("/");
    } catch (error) {
      console.error("Failed to delete note");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Box
      as="section"
      h="100vh"
      bg={theme === "dark" ? "#121212" : "white"}
      color={theme === "dark" ? "white" : "#333"}
      position="relative"
    >
      <Box p="41px">
        {loading ? <Loading /> : <NoteDetail {...note} />}
      </Box>

      <Box
        position="fixed"
        bottom="32px"
        right="32px"
        display="flex"
        gap="16px"
        zIndex="1000"
      >
        <Button
          className="fab fab-archive"
          aria-label="archive"
          onClick={archiveHandler}
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
        >
          {note.archived ? <MdUnarchive size={22} /> : <MdArchive size={28} />}
        </Button>

        <Button
          className="fab fab-delete"
          aria-label="delete"
          onClick={deleteHandler}
          borderRadius="12px"
          bg="red.500"
          _hover={{ bg: "red.600" }}
          color="white"
          w="56px"
          h="56px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.25)"
        >
          <FaTrashAlt size={22} />
        </Button>
      </Box>
    </Box>
  );
}

export default DetailPage;
