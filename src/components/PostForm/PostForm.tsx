import { FormEvent, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const PostForm = () => {
  const [title, setTitle] = useState("");
  const { addPost } = useContext(AppContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          userId: 1,
        }),
      });

      if (!res.ok) throw new Error("Cannot add new post!");

      const post = await res.json();

      // jezeli post to dodac do tablicy
      addPost(post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="post-title">
        Tytuł:
        <input
          type="text"
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button type="submit">Utwórz</button>
    </form>
  );
};
