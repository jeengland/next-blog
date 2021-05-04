import getAllPosts from "@prismic/getAllPosts";
import PostPreview from "@components/homepage/PostPreview";
import { Skeleton } from "@chakra-ui/react";

export default function PreviewPage() {
  const { isLoading, data } = getAllPosts();
  console.log(data);
  return (
    <>
      <h1>Posts</h1>
      {data?.results.map((postInfo) => (
        <PostPreview key={postInfo.id} postInfo={postInfo} />
      ))}
    </>
  );
}
