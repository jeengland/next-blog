import {
  Avatar,
  Heading,
  Flex,
  Link,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import NextLink from "next/link";

import ColorModeToggle from "./ColorModeToggle";

export default function Header() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      height="5rem"
      p="1rem"
      as="header"
      justify="space-between"
      width="100%"
      bg={`${colorMode}.primary`}
      alignItems="center"
    >
      <Flex>
        <Avatar
          size="sm"
          name="Jacob Cavazos-England"
          src="https://avatars.githubusercontent.com/u/47133136?v=4"
        />
        <Flex as="nav" fontSize="xx-large">
          <Icon
            as={FaLinkedin}
            href="https://www.linkedin.com/in/jacobeengland/"
            ml="10px"
            cursor="pointer"
          />
          <Icon
            as={FaGithub}
            href="https://www.github.com/jeengland"
            ml="10px"
            cursor="pointer"
          />
        </Flex>
      </Flex>
      <Heading as="h1" cursor="pointer" ml="-70px">
        <NextLink href="/">What I'm Up To</NextLink>
      </Heading>
      <ColorModeToggle />
    </Flex>
  );
}
