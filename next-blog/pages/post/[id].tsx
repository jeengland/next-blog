import { useRouter } from "next/router";

import PostPage from "@components/post/PostPage";
import BaseContainer from "@components/common/BaseContainer";

import getPost from "@prismic/getPost";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, data } = getPost(id);
  return (
    <BaseContainer>
      {!isLoading && <PostPage postData={data?.results[0]} />}
    </BaseContainer>
  );
};

export default Post;
