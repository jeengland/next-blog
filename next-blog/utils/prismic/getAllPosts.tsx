import Client from "./Client";
import Prismic from "prismic-javascript";

const getAllPosts = (id) => {
  return Client.query(Prismic.Predicates.at("document.type", "post"));
};
