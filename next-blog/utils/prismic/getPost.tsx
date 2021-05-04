import Client from "./Client";
import Prismic from "prismic-javascript";

const getPost = (id) => {
  return Client.query(Prismic.Predicates.at("document.id", id));
};
