import { RichText } from "prismic-reactjs";
import Image from "next/image";

export default function PostPage({ postData }) {
  console.log(postData);
  const { content, hero, title } = postData?.data;
  return (
    <>
      <h1>{RichText.asText(title)}</h1>
      <Image
        src={hero.url}
        alt={hero.alt}
        width={hero.dimensions.width}
        height={hero.dimensions.height}
      />
      <p>{RichText.asText(content)}</p>
    </>
  );
}
