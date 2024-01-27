/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
// #region Imports

import { createContext, useContext, useEffect } from "react";

import { AxiosError } from "axios";

import { api } from "@/services/api";
import { GenericContextProps } from "@/types/global";

import { Post, usePostsStates } from "./states";

// #endregion

export const PostsActionsContext = createContext(
  {});

export function PostsActionsProvider({ children }: GenericContextProps) {
  const { dispatch } = usePostsStates();

  async function getPosts(abort: AbortController) {
    dispatch({ type: "SET_LOADING_TRUE" });

    try {
      const { data } = await api.get<Post[]>("posts/", {
        signal: abort.signal,
      });

      // Slice to just 20 objects
      const formattedData: Post[] = data.slice(0, 20);

      dispatch({ type: "SET_POSTS_PAYLOAD", payload: formattedData });
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
        dispatch({ type: "SET_LOADING_FALSE" });
      }, 1500);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();

    getPosts(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  const providerValue = {};

  return (
    <PostsActionsContext.Provider value={providerValue}>
      {children}
    </PostsActionsContext.Provider>
  );
}

export function usePostsActions() {
  const context = useContext(PostsActionsContext);

  if (!context)
    throw new Error(
      "usePostsActions must be used within a PostsActionsProvider"
    );

  return context;
}
