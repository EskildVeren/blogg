import "./style.css";
import Navbar from "../../components/Navbar";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { BlogPostFormInput } from "../../lib/types";

function WriteBlog() {
  const { register, handleSubmit } = useForm<BlogPostFormInput>();
  const onSubmit: SubmitHandler<BlogPostFormInput> = (data) =>
    console.log(data);

  return (
    <main className="col align-center">
      <Navbar />
      <form
        className="col align-center full-width"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="tittel" className="col full-width">
          Tittel
          <input
            id="tittel"
            type="text"
            placeholder="En fantastisk tittel"
            className="full-width"
            {...register("title")}
          />
        </label>
        <textarea {...register("body")} />
        <span className="row space-between full-width">
          <label htmlFor="secret-code" className="col">
            Hemmelig kode
            <input id="secret-code" type="text" {...register("passcode")} />
          </label>
          <button type="submit">Send inn </button>
        </span>
      </form>
    </main>
  );
}

export default WriteBlog;
