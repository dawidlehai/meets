import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  const { newsId } = router.query;
  return <h1>News Details Page for {newsId}</h1>;
};

export default NewsDetails;
