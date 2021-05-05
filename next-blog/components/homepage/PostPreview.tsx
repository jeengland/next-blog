import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";

export default function PostPreview({ postInfo }) {
  const { content, date, hero, title } = postInfo.data;
  return (
    <>
      <Link href={`/post/${postInfo.id}`}>
        <h1>{RichText.asText(title)}</h1>
      </Link>
      <p>{date}</p>
      <Image
        src={hero.url}
        alt={hero.alt}
        width={hero.dimensions.width}
        height={hero.dimensions.height}
      />
      <p>{content[0].text}</p>
      <Link href={`/post/${postInfo.id}`}>Read More</Link>
    </>
  );
}
