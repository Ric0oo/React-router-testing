import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { PostForm } from "../PostForm/PostForm";

export type PostType = {
  id: number;
  title: string;
};

export const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) throw new Error("Cannot fetch posts!");

      const { posts } = await res.json();

      if (posts) setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = (post: PostType) => setPosts((prev) => [...prev, post]);

  const updatePost = (updatedPost: PostType) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (updatedPost.id !== post.id) return post;

        return updatedPost;
      })
    );
  };

  const deletePostByID = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return posts.length > 0 ? (
    <>
      <PostForm addPost={addPost} />
      <ul>
        {posts.map((post) => (
          <Post
            key={post.id}
            updatePost={updatePost}
            deletePostByID={deletePostByID}
            {...post}
          />
        ))}
      </ul>
    </>
  ) : (
    <h1>"Brak informacji o postach"</h1>
  );
};
