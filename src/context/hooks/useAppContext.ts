import { useState, useEffect } from "react";
import { PostType } from "../AppContext";

type Data = {
  posts: PostType[];
  addPost: (post: PostType) => void;
  updatePost: (updatedPost: PostType) => void;
  deletePostByID: (id: number) => void;
};

export const useAppContext = (): Data => {
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

  return {
    posts,
    addPost,
    updatePost,
    deletePostByID,
  };
};
