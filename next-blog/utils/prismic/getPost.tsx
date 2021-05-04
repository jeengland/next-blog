import Client from "./Client";
import Prismic from "prismic-javascript";
import { useQuery } from "react-query";

const getPost = (id) => {
  const { data, isLoading } = useQuery(id, () =>
    Client.query(Prismic.Predicates.at("document.id", id))
  );
  return { data, isLoading };
};

export default getPost;
