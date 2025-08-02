import { type BlogPostData } from "./types";

export async function getPosts(): Promise<BlogPostData[]> {
  const response = (await fetch("http://localhost:8080/posts")).json();

  return response;
}
