import type { BlogPostFormInput } from "../../../lib/types";

export async function createPost(blogPost: BlogPostFormInput) {
  const res = await fetch("http://localhost:8080/posts/" + blogPost.title, {
    method: "POST",
    body: JSON.stringify({
      body: blogPost.body,
      passcode: blogPost.passcode,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
