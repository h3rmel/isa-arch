/* eslint-disable react-refresh/only-export-components */
// #region Imports

import { createContext, useContext } from "react";

import { AxiosError } from "axios";

import { api } from "@/services/api";
import { GenericContextProps } from "@/types/global";

import { Post, PostsStatesContext } from "./states";

// #endregion

export interface PostsActionsContextProps {
  getPosts: (abort: AbortController) => Promise<void>;
}

export const PostsActionsContext = createContext<PostsActionsContextProps>(
  {} as PostsActionsContextProps
);

export function PostsActionsProvider({ children }: GenericContextProps) {
  const { setIsLoading, setPosts } = useContext(PostsStatesContext);

  async function getPosts(abort: AbortController) {
    setIsLoading(true);

    try {
      const { data } = await api.get<Post[]>("posts/", {
        signal: abort.signal,
      });

      // Slice to just 20 objects
      const formattedData: Post[] = data.slice(0, 20);

      setPosts(formattedData);
    } catch (error) {
      if (abort.signal.aborted) console.log("The user aborted the request.");

      const axiosError = error as AxiosError;

      if (axiosError)
        console.error({
          message: axiosError.message,
          status: axiosError.status,
        });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }

  const providerValue: PostsActionsContextProps = {
    getPosts,
  };

  return (
    <PostsActionsContext.Provider value={providerValue}>
      {children}
    </PostsActionsContext.Provider>
  );
}

export function usePostsActions() {
  const context = useContext(PostsActionsContext);

  if (!context)
    throw new Error("usePostsActions must be used within a PostsActionsProvider");

  return context;
}