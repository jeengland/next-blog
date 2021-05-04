import { useRouter } from "next/router";

import PostPage from "@components/post/PostPage";

import getPost from "@prismic/getPost";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, data } = getPost(id);
  return <>{!isLoading && <PostPage postData={data?.results[0]} />}</>;
};

export default Post;
