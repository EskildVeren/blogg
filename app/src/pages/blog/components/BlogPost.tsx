import type { BlogPostData } from "../lib/types";

function BlogPost(props: { blogPost: BlogPostData }) {
  return (
    <div className="blog-post-container" key={props.blogPost.title}>
      <h2 className="blog-post-title">{props.blogPost.title}</h2>

      {props.blogPost.body.map((paragraph) => {
        return <p>{paragraph}</p>;
      })}
    </div>
  );
}

export default BlogPost;
