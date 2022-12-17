import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/article1">Article 1</Link>
        </li>
        <li>
          <Link href="/news/article2">Article 2</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
