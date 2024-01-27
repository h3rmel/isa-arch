/* eslint-disable react-refresh/only-export-components */
// #region Imports

import { createContext } from "react";

import { api } from "@/services/api";

import { IPost } from "./states";

import { usePosts } from "..";
import { AxiosError } from "axios";

// #endregion

export interface PostsActionsContext {
  getPosts: (abort: AbortController) => Promise<void>;
}

export const PostsActionsContext = createContext<PostsActionsContext>(
  {} as PostsActionsContext
);

export function usePostsActions() {
  const { statesPosts } = usePosts();

  const { setIsLoading, setPosts } = statesPosts;

  async function getPosts(abort: AbortController) {
    setIsLoading(true);

    try {
      const { data } = await api.get<IPost[]>("posts/", {
        signal: abort.signal,
      });

      // Slice to just 20 objects
      const formattedData: IPost[] = data.slice(0, 20);

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

  return { getPosts };
}
