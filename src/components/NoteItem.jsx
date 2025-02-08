import { ThemeContext } from "@/context/ThemeContext";
import { Card, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";
import { showFormattedDate } from "../utils";
import SpotlightCard from "../../y/SpotlightCard/SpotlightCard"

function NoteItem({ id, title, createdAt, body }) {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  return (
    <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)"> {/* Tambahkan SpotlightCard */}
      <Card.Root
        transition="background 0.3s ease-in-out"
        h="100%"
        w="100%"
        // borderRadius="12px"
        // borderRightWidth="1px"
        // borderColor={theme === "dark" ? "#353535" : "#0000001a"}
        bg={theme === "dark" ? "#1e1e1e" : "#0000000d"}
        color={theme === "dark" ? "white" : "#333"}
        overflow="hidden"
        _hover={{
          bg: theme === "dark" ? "#ffffff14" : "white",
          boxShadow: "0 4px 12px #00000033",
        }}
      >
        <Card.Body gap="2">
          <Card.Title>
            <Link to={`/notes/${id}`}>{title}</Link>
          </Card.Title>
          <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="2">
            {showFormattedDate(createdAt, locale)}
          </Text>
          <Card.Description
            color={theme === "dark" ? "white" : "#333"}
            lineClamp="3"
          >
            {body}
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </SpotlightCard>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
