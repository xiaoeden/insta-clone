import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import {
  ExploreLogo,
  HomeLogo,
  InstagramLogo,
  InstagramTextLogo,
  MessengerLogo,
  NewPostLogo,
  NotificationsLogo,
  ReelsLogo,
  SearchLogo,
  SettingsLogo,
} from "../../assets/constants";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <HomeLogo />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
      link: "/",
    },
    {
      icon: <ExploreLogo />,
      text: "Explore",
      link: "/",
    },
    {
      icon: <ReelsLogo />,
      text: "Reels",
      link: "/",
    },
    {
      icon: <MessengerLogo />,
      text: "Messages",
      link: "/",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
      link: "/",
    },
    {
      icon: <NewPostLogo />,
      text: "Create",
      link: "/",
    },
    {
      icon: <Avatar size={"xs"} name="Eden Lin" src="/profilepic.png" />,
      text: "Profile",
      link: "/",
    },
    {
      icon: <SettingsLogo />,
      text: "More",
      link: "/",
    },
  ];
  return (
    <>
      <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"#CBD5E0"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={4}
      >
        <Flex direction={"column"} gap={10} width={"full"} height={"full"}>
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            height={10}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <InstagramTextLogo />
          </Link>
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            display={{ base: "block", md: "none" }}
            borderRadius={6}
            _hover={{ bg: "gray.200" }}
            height={10}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </Link>

          <Flex direction={"column"} gap={1} cursor={"pointer"}>
            {sidebarItems.map((item, index) => (
              <Tooltip
                hasArrow
                label={item.text}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
                key={index}
              >
                <Link
                  display={"flex"}
                  to={null}
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{ bg: "gray.200" }}
                  borderRadius={6}
                  p={2}
                  py={3}
                  w={"full"}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Link>
              </Tooltip>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
