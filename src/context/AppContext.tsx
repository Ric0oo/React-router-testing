import { FC, PropsWithChildren, createContext } from "react";
import { useAppContext } from "./hooks/useAppContext";

export type PostType = {
  id: number;
  title: string;
};

type AppContextType = {
  posts: PostType[];
  addPost: (post: PostType) => void;
  updatePost: (updatedPost: PostType) => void;
  deletePostByID: (id: number) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { posts, addPost, updatePost, deletePostByID } = useAppContext();

  return (
    <AppContext.Provider
      value={{
        posts,
        addPost,
        updatePost,
        deletePostByID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
