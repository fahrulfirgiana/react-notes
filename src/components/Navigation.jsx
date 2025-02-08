import React, { useContext, useState } from "react";
import { 
  DrawerRoot, DrawerBackdrop, DrawerTrigger, DrawerContent, DrawerCloseTrigger, 
  DrawerHeader, DrawerTitle, DrawerBody 
} from "@/components/ui/drawer";
import { Box, VStack, IconButton, Text } from "@chakra-ui/react";
import { LocaleContext } from "../context/LocaleContext";
import { Link, useLocation } from "react-router-dom";
import { MdArchive, MdHome, MdMenu } from "react-icons/md";
import { ThemeContext } from "@/context/ThemeContext";

export default function Navigation() {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tombol menu untuk layar kecil */}
      <IconButton
        aria-label="Open Menu"
        icon={<MdMenu />}
        display={{ base: "block", lg: "none" }}
        position="fixed"
        top="16px"
        left="16px"
        zIndex="1100"
        onClick={() => setOpen(true)}
      />

      {/* Sidebar untuk layar besar */}
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
        <SidebarContent locale={locale} location={location} theme={theme} />
      </Box>

      {/* Drawer (Menu Geser) untuk layar kecil */}
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger />
        <DrawerContent>
          <DrawerCloseTrigger />
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

// Komponen sidebar untuk menghindari duplikasi kode
function SidebarContent({ locale, location, theme }) {
  return (
    <VStack as="ul" spacing={2} align="stretch">
      <Text as="h1" fontSize="24px" mb="8px">NoteApp</Text>
      <NavItem to="/" icon={MdHome} label={locale === "id" ? "Beranda" : "Home"} location={location} theme={theme} />
      <NavItem to="/arsip" icon={MdArchive} label={locale === "id" ? "Arsip" : "Archive"} location={location} theme={theme} />
    </VStack>
  );
}

// Komponen untuk item navigasi
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
        color={location.pathname === to ? "white" : theme === "dark" ? "gray.300" : "gray.700"}
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
