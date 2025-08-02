import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./lib/api";
import "./style.css";
import Navbar from "../../components/Navbar";
import BlogPost from "./components/BlogPost";

function BlogPage() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getPosts,
  });

  if (isPending) {
    return <div>Pending</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (typeof data === "undefined") {
    return <p>Error</p>;
  }

  return (
    <>
      <Navbar />
      {data.map((blogPost) => (
        <BlogPost blogPost={blogPost} />
      ))}
    </>
  );
}

export default BlogPage;
