import React, { useEffect, useState, useContext } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import NoteList from "../components/NoteList";
import { LocaleContext } from "../context/LocaleContext";
import { getArchivedNotes } from "../utils/api";
import content from "../utils/content";
import { Box } from "@chakra-ui/react";
import { ThemeContext } from "@/context/ThemeContext";


function ArsipPage() {
  const { locale } = React.useContext(LocaleContext);
  const [noteArchived, setNoteArchived] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { error, data } = await getArchivedNotes();
        if (error) {
          setError("Note not found");
        } else {
          setNoteArchived(data);
        }
      } catch (err) {
        setError("Failed to load note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, []);

  const filteredNotes = noteArchived.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Box as="section" h="100vh" >
      <Box p="41px">
        <Navbar
          title={content.arsip[locale].header}
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
        {loading ? <Loading /> : <NoteList notes={filteredNotes} />}
      </Box>
    </Box>
  );
}

export default ArsipPage;
