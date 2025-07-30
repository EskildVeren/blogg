import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

function BlogPage() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getPosts,
  });
  console.log(data);

  if (isPending) {
    return <div>Pending</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {data[0].title}
      <br /> {data[0].text}
    </div>
  );
}

export default BlogPage;
