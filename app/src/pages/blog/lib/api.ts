import { serverHostName } from "../../../lib/constants";
import { type BlogPostData } from "./types";

export async function getPosts(): Promise<BlogPostData[]> {
  const response = (await fetch(`${serverHostName}/posts`)).json();

  return response;
}
