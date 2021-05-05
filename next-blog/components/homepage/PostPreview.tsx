import { RichText } from "prismic-reactjs";
import Image from "next/image";
import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";

export default function PostPreview({ postInfo }) {
  const { content, date, hero, title } = postInfo.data;
  return (
    <>
      <NextLink href={`/post/${postInfo.id}`}>
        <Link>
          <Heading as="h3" fontSize="xl">
            {RichText.asText(title)}
          </Heading>
        </Link>
      </NextLink>
      <p>{date}</p>
      <Image
        src={hero.url}
        alt={hero.alt}
        width={hero.dimensions.width}
        height={hero.dimensions.height}
      />
      <p>{content[0].text}</p>
      <NextLink href={`/post/${postInfo.id}`}>
        <Link fontWeight="bold">Read More</Link>
      </NextLink>
    </>
  );
}
