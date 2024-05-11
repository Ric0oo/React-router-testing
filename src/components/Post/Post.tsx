import { FormEvent, useState } from "react";
import { PostType } from "../PostList/PostList";

type Props = {
  id: number;
  title: string;
  updatePost: (post: PostType) => void;
  deletePost: (id: number) => void;
};

export const Post = ({ id, title, updatePost, deletePost }: Props) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [postTitle, setPostTitle] = useState(title);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: postTitle,
        }),
      });

      if (!res.ok) throw new Error("Cannot update post!");

      const post = await res.json();

      if (post) {
        updatePost(post);
        setIsReadOnly(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Cannot delete post!");
      const post = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>
      {isReadOnly ? (
        `id: ${id}, tytuł: ${title}`
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="form-post-title">
              Tytuł:
              <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </label>
            <button type="submit">Zapisz</button>
          </form>
          <button onClick={deletePost}>Usuń</button>
        </>
      )}
      {isReadOnly && (
        <button onClick={() => setIsReadOnly(false)}>Edytuj</button>
      )}
    </li>
  );
};