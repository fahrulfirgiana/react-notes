import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/LocaleContext";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

function NoteList({ notes }) {
  const { locale } = React.useContext(LocaleContext);

  if (!notes.length) {
    return (
      <div className="notes-list-empty">
        <p>{locale === "id" ? "Catatan tidak ditemukan" : "Note not found"}</p>
      </div>
    );
  }

  return (
    <SimpleGrid columns={4} gap="20px" py="24px" minChildWidth="350px">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </SimpleGrid>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NoteList;
