import React, { useContext } from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
import { LocaleContext } from "../context/LocaleContext";
import { ThemeContext } from '@/context/ThemeContext';
import { Card, Text } from "@chakra-ui/react";

function NoteDetail({ title, createdAt, body }) {
  const { locale } = useContext(LocaleContext);
    const { theme } = useContext(ThemeContext); 

  return (
    <Card.Root
    transition="background 0.3s ease-in-out"
    borderRadius="12px"
    borderRightWidth="1px"
    borderColor={theme === "dark" ? "#353535" : "#0000001a"}
    bg={theme === "dark" ? "#1e1e1e" : "#0000000d"}
    color={theme === "dark" ? "white" : "#333"}
  >
    <Card.Body gap="2">
      <Card.Title>
        {title}
      </Card.Title>
      <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="2">
        {showFormattedDate(createdAt, locale)}
      </Text>
      <Card.Description
        color={theme === "dark" ? "white" : "#333"}
      >
        {body}
      </Card.Description>
    </Card.Body>
  </Card.Root>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
