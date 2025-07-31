import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";
import "./style.css";

function BlogPage() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getPosts,
  });
  console.log(data);

  if (isPending) {
    return <div>Pending</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="blog-post-container">
      <h2 className="blog-post-title">{data[0].title}</h2>
      <p>{data[0].text}</p>
    </div>
  );
}

export default BlogPage;
