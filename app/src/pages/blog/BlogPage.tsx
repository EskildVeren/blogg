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
  if (typeof data === "undefined") {
    return <p>Error</p>;
  }

  return (
    <>
      {data.map((blogPost) => {
        console.log(blogPost);
        console.log("Ma");
        console.log("oiia", blogPost.body[1]);

        return (
          <div className="blog-post-container" key={blogPost.title}>
            <h2 className="blog-post-title">{blogPost.title}</h2>

            {blogPost.body.map((paragraph) => {
              return <p>{paragraph}</p>;
            })}
          </div>
        );
      })}
    </>
  );
}

export default BlogPage;
