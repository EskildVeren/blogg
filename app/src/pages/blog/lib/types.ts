export type BlogPostData = {
  title: string;
  body: string[];
  dateCreated: string;
};
export function isBlogPost(data: unknown): data is BlogPostData {
  return (
    (data as BlogPostData).title !== undefined &&
    (data as BlogPostData).body !== undefined
  );
}
