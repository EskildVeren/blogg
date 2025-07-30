export async function getPosts() {
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    return "No blog found";
  }
  return response.json();
}
