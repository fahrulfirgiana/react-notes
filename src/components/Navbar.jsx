import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { IoLanguage } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { LocaleContext } from "../context/LocaleContext";
import { ThemeContext } from "../context/ThemeContext";
import SearchBar from "./SearchBar";

function Navbar({
  title,
  logout,
  name,
  keyword,
  keywordChange,
  showSearch = true,
  showLogout = true,
  showName = true,
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <Flex
      as="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="48px"
      color={theme === "dark" ? "white" : "gray.700"}
      p={1}
    >
      <Box>
        <Heading className="text-hd" fontSize="xl" fontWeight="bold">
          {title}
        </Heading>
      </Box>

      <Flex alignItems="center" justifyContent="center" gap={6}>
        {showSearch && (
          <SearchBar keyword={keyword} keywordChange={keywordChange} />
        )}

        <MenuRoot>
          <MenuTrigger asChild>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/004/511/281/original/default-avatar-photo-placeholder-profile-picture-vector.jpg"
              alt="profile-img"
              boxSize="36px"
              borderRadius="full"
            />
          </MenuTrigger>
          <MenuContent className="user-menu">
            {showName && (
              <MenuItem className="user-menu-link">
                <Box display="flex" alignItems="center" py={2} px={3}>
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/004/511/281/original/default-avatar-photo-placeholder-profile-picture-vector.jpg"
                    alt="profile-img"
                    boxSize="36px"
                    borderRadius="full"
                  />
                  <VStack align="start" gap={1} ml={3} className="details">
                    <Text id="profile-name" fontWeight="bold">
                      {name || "User"}
                    </Text>
                    <Text id="profile-footer" fontSize="sm" color="gray.500">
                      Team Hallaway
                    </Text>
                  </VStack>
                </Box>
              </MenuItem>
            )}
            <MenuSeparator className="separator" />
            <MenuItem
              className="user-menu-link"
              py={2}
              px={3}
              onClick={toggleTheme}
              value="bold"
            >
              <span className="icon-theme">
                {theme === "light" ? (
                  <MdDarkMode size={22} className="theme-icon" />
                ) : (
                  <MdLightMode size={22} className="theme-icon" />
                )}
              </span>
              <span className="theme-text">
                {locale === "id" ? "Ganti Tema" : "Change Theme"}{" "}
                {theme === "light" ? "Dark" : "Light"}
              </span>
            </MenuItem>
            <MenuItem
              className="user-menu-link"
              py={2}
              px={3}
              onClick={toggleLocale}
              value="underline"
            >
              <IoLanguage size={22} className="theme-icon" />{" "}
              {locale === "id" ? "Indonesia" : "English"}
            </MenuItem>
            <MenuSeparator className="separator" />
            {showLogout && (
              <MenuItem
                className="user-menu-link"
                py={2}
                px={3}
                color="fg.error"
                value="left"
                onClick={logout}
              >
                Logout
              </MenuItem>
            )}
          </MenuContent>
        </MenuRoot>
      </Flex>
    </Flex>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  keyword: PropTypes.string,
  showSearch: PropTypes.bool,
  keywordChange: PropTypes.func,
  logout: PropTypes.func,
  showLogout: PropTypes.bool,
  showName: PropTypes.bool,
};

export default Navbar;
