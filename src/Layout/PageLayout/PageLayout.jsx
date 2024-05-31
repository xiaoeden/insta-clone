import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const noSidebarList = ["/auth", "/login", "/emailsignup"];
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* sidebar on the left */}
      {!noSidebarList.includes(pathname) ? (
        <Box w={{ base: "80px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* the page content on the right */}
      <Box flex={1} w={{ base: "calc(100% - 80px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
