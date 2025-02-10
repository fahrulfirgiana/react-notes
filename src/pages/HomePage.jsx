import { Box, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import NoteList from "../components/NoteList";
import { LocaleContext } from "../context/LocaleContext";
import { getActiveNotes } from "../utils/api";
import content from "../utils/content";

function HomePage({ name, logout }) {
  const { locale } = React.useContext(LocaleContext);
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    async function fetchNotes() {
      try {
        const result = await getActiveNotes();
        if (!result.error) {
          setNotes(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch notes:", error);
        setIsLoading(false);
      }
    }

    fetchNotes();
  }, []);

  const onKeywordChangeHandler = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <Box as="section">
      <Box p={{ base: "16px", lg: "41px" }}>
        <Navbar
          title={content.home[locale].header}
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
          name={name}
          logout={logout}
        />
        <Box p={{ base: "16px", lg: "24px" }}>
          {isLoading ? <Loading /> : <NoteList notes={filteredNotes} />}
        </Box>
        <Box
          position="fixed"
          bottom="32px"
          right="32px"
          display="flex"
          gap="16px"
          zIndex="1000"
        >
          <Link to="/add-note">
            <Button
              aria-label="add"
              borderRadius="12px"
              bg="teal.600"
              _hover={{ bg: "teal.700" }}
              color="white"
              w="56px"
              h="56px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.25)"
            >
              <FiPlus size={32} color="white" />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default HomePage;