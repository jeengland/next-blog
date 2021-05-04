import Client from "./Client";
import Prismic from "prismic-javascript";
import { useQuery } from "react-query";

const getAllPosts = () => {
  const { data: data, isLoading } = useQuery("posts", () =>
    Client.query(Prismic.Predicates.at("document.type", "post"))
  );
  return { data, isLoading };
};

export default getAllPosts;
