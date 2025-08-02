import "./style.css";
import Navbar from "../../components/Navbar";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "./lib/api";
import type { BlogPostFormInput } from "./lib/types";

function WriteBlog() {
  const mutation = useMutation({ mutationFn: createPost });
  const { register, handleSubmit } = useForm<BlogPostFormInput>();
  const onSubmit: SubmitHandler<BlogPostFormInput> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <main className="col align-center full-width">
      <Navbar />
      <form
        className="col align-center full-width"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="title" className="col full-width">
          Tittel
          <input
            id="title"
            type="text"
            placeholder="En fantastisk tittel"
            className="titleInput"
            {...register("title")}
          />
        </label>

        <label htmlFor="blog-post-text" className="col full-width">
          <textarea id="blog-post-text" {...register("body")} />
        </label>

        <span className="passcode-submit-container">
          <label htmlFor="secret-code" className="col">
            Hemmelig kode
            <input id="secret-code" type="text" {...register("passcode")} />
          </label>
          <button id="submit-button" type="submit">
            Send inn
          </button>
        </span>
      </form>
    </main>
  );
}

export default WriteBlog;
