import { type BlogPost } from "./types";

export async function getPosts(): Promise<BlogPost[]> {
  const response = (await fetch("http://localhost:8080/posts")).json();

  return response;
}
