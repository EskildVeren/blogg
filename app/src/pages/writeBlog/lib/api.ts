import { serverHostName } from "../../../lib/constants";
import type { BlogPostFormInput } from "./types";

export async function createPost(blogPost: BlogPostFormInput) {
  const res = await fetch(`${serverHostName}/posts/${blogPost.title}`, {
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
