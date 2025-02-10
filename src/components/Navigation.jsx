import React, { useContext, useState } from "react";
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerContent,
  DrawerCloseTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
} from "@/components/ui/drawer";
import { Box, VStack, IconButton, Text, Flex, Image } from "@chakra-ui/react";
import { LocaleContext } from "../context/LocaleContext";
import { Link, useLocation } from "react-router-dom";
import { MdArchive, MdHome, MdMenu } from "react-icons/md";
import { ThemeContext } from "@/context/ThemeContext";
import SearchBar from "./SearchBar";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import { IoLanguage } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import PropTypes from 'prop-types';

function Navigation({ logout, name }) {  
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar untuk mobile */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        width="100%"
        h="100%"
        p={3}
        display={{ base: "flex", lg: "none" }}
        bg={theme === "dark" ? "#121212" : "white"}
        color={theme === "dark" ? "white" : "gray.700"}
        boxShadow="sm"
      >
        <IconButton
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
          bg={theme === "dark" ? "#121212" : "white"}
          color={theme === "dark" ? "white" : "#121212"}
          variant="ghost"
        >
          <MdMenu />
        </IconButton>
        <Flex flex="1" justify="flex-end" align="center" gap={4}>
          <SearchBar />
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
                      {name || 'User'}
                    </Text>
                    <Text id="profile-footer" fontSize="sm" color="gray.500">
                      Team Hallaway
                    </Text>
                  </VStack>
                </Box>
              </MenuItem>
              <MenuSeparator className="separator" />
              <MenuItem
                className="user-menu-link"
                py={2}
                px={3}
                onClick={toggleTheme}
              >
                <span className="icon-theme">
                  {theme === "light" ? (
                    <MdDarkMode size={22} />
                  ) : (
                    <MdLightMode size={22} />
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
            </MenuContent>
          </MenuRoot>
        </Flex>
      </Flex>

      {/* Sidebar untuk desktop */}
      <Box
        as="nav"
        px={8}
        py={4}
        h="100vh"
        borderRightWidth="1px"
        borderColor={theme === "dark" ? "#2a2a2a" : "#e5e5e5"}
        bg={theme === "dark" ? "#121212" : "white"}
        color={theme === "dark" ? "white" : "gray.700"}
        display={{ base: "none", lg: "block" }}
      >
        <Text fontSize="24px" display={{ base: "none", lg: "block" }} mb="12px">
          NoteApp
        </Text>
        <SidebarContent locale={locale} location={location} theme={theme} />
      </Box>

      {/* Drawer untuk mobile */}
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger />
        <DrawerContent
          bg={theme === "dark" ? "#121212" : "white"}
          color={theme === "dark" ? "white" : "gray.700"}
        >
          <DrawerCloseTrigger color={theme === "dark" ? "white" : "gray.700"} />
          <DrawerHeader>
            <DrawerTitle>NoteApp</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <SidebarContent locale={locale} location={location} theme={theme} />
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </>
  );
}

// Add PropTypes
Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

function SidebarContent({ locale, location, theme }) {
  return (
    <VStack as="ul" spacing={2} align="stretch">
      <NavItem
        to="/"
        icon={MdHome}
        label={locale === "id" ? "Beranda" : "Home"}
        location={location}
        theme={theme}
      />
      <NavItem
        to="/arsip"
        icon={MdArchive}
        label={locale === "id" ? "Arsip" : "Archive"}
        location={location}
        theme={theme}
      />
    </VStack>
  );
}

function NavItem({ to, icon: Icon, label, location, theme }) {
  return (
    <Link to={to}>
      <Box
        as="li"
        display="flex"
        alignItems="center"
        gap={3}
        p={3}
        borderRadius="md"
        bg={location.pathname === to ? "teal.500" : "transparent"}
        color={
          location.pathname === to
            ? "white"
            : theme === "dark"
            ? "gray.300"
            : "gray.700"
        }
        _hover={{
          bg: "teal.400",
          color: "white",
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Box as={Icon} w={6} h={6} />
        {label}
      </Box>
    </Link>
  );
}

export default Navigation;