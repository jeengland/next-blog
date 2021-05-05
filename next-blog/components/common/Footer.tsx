import { Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      h="2.5rem"
      w="100%"
      pos="absolute"
      bottom={0}
      flexDirection="column"
      align="center"
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
