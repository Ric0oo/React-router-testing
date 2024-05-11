import { useContext } from "react";
import { Post } from "../Post/Post";
import { PostForm } from "../PostForm/PostForm";
import { AppContext } from "../../context/AppContext";

export const PostList = () => {
  const { posts } = useContext(AppContext);

  return posts.length > 0 ? (
    <>
      <PostForm />
      <ul>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </>
  ) : (
    <h1>"Brak informacji o postach"</h1>
  );
};
