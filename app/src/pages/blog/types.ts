export type BlogPost = {
  title: string;
  body: string[];
};
export function isBlogPost(data: unknown): data is BlogPost {
  return (
    (data as BlogPost).title !== undefined &&
    (data as BlogPost).body !== undefined
  );
}
