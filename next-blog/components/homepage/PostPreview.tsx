import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";

export default function PostPreview({ postInfo }) {
  const { hero, content, title } = postInfo.data;
  return (
    <>
      <Image
        src={hero.url}
        alt={hero.alt}
        width={hero.dimensions.width}
        height={hero.dimensions.height}
      />
      <Link href={`/post/${postInfo.id}`}>
        <h1>{RichText.asText(title)}</h1>
      </Link>
      <p>{RichText.asText(content)}</p>
    </>
  );
}
