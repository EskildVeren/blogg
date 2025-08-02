import type { BlogPostData } from "../lib/types";

function BlogPost(props: { blogPost: BlogPostData }) {
  console.log(props.blogPost);

  if (props.blogPost.dateCreated == null) {
    props.blogPost.dateCreated = "Ukjent dato";
  }

  return (
    <div className="blog-post-container" key={props.blogPost.title}>
      <h2 className="blog-post-title">{props.blogPost.title}</h2>
      <p className="blog-post-date-mark">{props.blogPost.dateCreated}</p>

      {props.blogPost.body.map((paragraph) => {
        return <p>{paragraph}</p>;
      })}
    </div>
  );
}

export default BlogPost;
