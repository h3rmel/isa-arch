/* eslint-disable react-refresh/only-export-components */
// #region Imports

import { ReactNode, createContext, useContext, useState } from "react";

import { PostsActionsContext, usePostsActions } from "./modules/actions";
import { IPost, PostsStatesContext } from "./modules/states";

// #endregion

// #region Interfaces

interface PostsContextProps {
  statesPosts: PostsStatesContext;
  actionsPosts: PostsActionsContext;
}

interface PostsProviderProps {
  children: ReactNode;
}

// #endregion

const PostsContext = createContext<PostsContextProps>({} as PostsContextProps);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { getPosts } = usePostsActions();

  const providerValue: PostsContextProps = {
    statesPosts: {
      posts,
      setPosts,
      isLoading,
      setIsLoading,
    },
    actionsPosts: {
      getPosts,
    },
  };

  return (
    <PostsContext.Provider value={providerValue}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  if (!context) throw new Error("usePosts must be used within a PostsProvider");

  return context;
}
