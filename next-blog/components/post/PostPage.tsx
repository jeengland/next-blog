import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/react";

export default function PostPage({ postData }) {
  console.log(postData);
  const { content, hero, title, date } = postData?.data;
  return (
    <>
      <Heading
        mt="1rem"
        mb="1rem"
        as="h2"
        fontSize="xx-large"
        textAlign="center"
      >
        {RichText.asText(title)}
      </Heading>
      <Image
        src={hero.url}
        alt={hero.alt}
        width={hero.dimensions.width}
        height={hero.dimensions.height}
      />
      <Text fontWeight="bold">{date}</Text>
      <Text>{RichText.asText(content)}</Text>
    </>
  );
}
