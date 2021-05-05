import { Avatar, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

import ColorModeToggle from "./ColorModeToggle";

export default function Header() {
  return (
    <Flex
      height="3rem"
      p="0.5rem"
      as="header"
      justify="space-between"
      width="100%"
    >
      <Flex>
        <Avatar
          name="Jacob Cavazos-England"
          src="https://avatars.githubusercontent.com/u/47133136?v=4"
        />
        <Flex as="nav" fontSize="xxx-large">
          <Icon as={FaLinkedin} ml="5px" />
          <Icon as={FaGithub} ml="5px" />
        </Flex>
      </Flex>
      <Heading as="h1" cursor="pointer" ml="-100px">
        <Link href="/">What I'm Up To</Link>
      </Heading>
      <ColorModeToggle />
    </Flex>
  );
}
