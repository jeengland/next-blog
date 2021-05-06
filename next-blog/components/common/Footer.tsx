import { Flex, Text, Link, useColorMode } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      pos="absolute"
      bottom={0}
      bg={`${colorMode}.secondary`}
      h="3rem"
      w="100%"
      mt={10}
      flexDirection="column"
      align="center"
      justify="center"
    >
      <Text w="100%" textAlign="center">
        Created using <Link href="https://nextjs.org/">Next.js</Link> | All
        photos from <Link href="https://unsplash.com/">Unsplash</Link> |{" "}
        <Link href="https://github.com/jeengland/next-blog">
          View Source Code
        </Link>
      </Text>
    </Flex>
  );
}
