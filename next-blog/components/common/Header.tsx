import { Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Flex justify="center">
      <Link href="/">
        <Heading cursor="pointer">What I'm Up To</Heading>
      </Link>
    </Flex>
  );
}
