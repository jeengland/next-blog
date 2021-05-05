import { RichText } from "prismic-reactjs";
import Image from "next/image";
import NextLink from "next/link";
import {
  Button,
  Divider,
  Heading,
  Link,
  Skeleton,
  Text,
} from "@chakra-ui/react";

export default function PostPreview({ postInfo, isLoading }) {
  const { content, date, hero, title } = postInfo.data;
  return (
    <>
      <Skeleton isLoaded={!isLoading}>
        <NextLink href={`/post/${postInfo.id}`}>
          <Link>
            <Heading as="h3" fontSize="xl">
              {RichText.asText(title)}
            </Heading>
          </Link>
        </NextLink>
        <Text mb={2}>{date}</Text>
        <Image
          src={hero.url}
          alt={hero.alt}
          objectFit="cover"
          width={hero.dimensions.width}
          height={hero.dimensions.height / 2}
        />
        <Text mt={2} mb={2}>
          {content[0].text}
        </Text>
        <NextLink href={`/post/${postInfo.id}`}>
          <Button fontSize="large" fontWeight="bold">
            Read More
          </Button>
        </NextLink>
        <Divider mt={4} />
      </Skeleton>
    </>
  );
}
