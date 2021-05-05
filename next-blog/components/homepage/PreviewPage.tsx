import getAllPosts from "@prismic/getAllPosts";
import PostPreview from "@components/homepage/PostPreview";
import { Heading, Skeleton } from "@chakra-ui/react";

export default function PreviewPage() {
  const { isLoading, data } = getAllPosts();
  console.log(data);
  return (
    <>
      <Heading
        mt="1rem"
        mb="2rem"
        as="h2"
        fontSize="xx-large"
        textAlign="center"
      >
        Latests Posts
      </Heading>
      {data?.results.map((postInfo) => (
        <PostPreview
          key={postInfo.id}
          postInfo={postInfo}
          isLoading={isLoading}
        />
      ))}
    </>
  );
}
