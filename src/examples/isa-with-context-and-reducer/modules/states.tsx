/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
// #region Imports

import { Dispatch, createContext, useContext, useReducer } from "react";

import { GenericContextProps } from "@/types/global";

// #endregion

// #region Interfaces & Types

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export interface PostsStatesContextProps {
  states: PostsStates;
  dispatch: Dispatch<any>;
}
export interface PostsStates {
  posts: Post[];
  isLoading: boolean;
}

// #endregion

export const PostsStatesContext = createContext<PostsStatesContextProps>(
  {} as PostsStatesContextProps
);

// #region Reducer

const initialState: PostsStates = {
  posts: [],
  isLoading: true,
};

function postsReducer(state: PostsStates, action: any) {
  switch (action.type) {
    case "SET_LOADING_TRUE":
      return { ...state, isLoading: true };
    case "SET_POSTS_PAYLOAD":
      return {
        ...state,
        posts: action.payload,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// #endregion

export function PostsStatesProvider({ children }: GenericContextProps) {
  const [states, dispatch] = useReducer(postsReducer, initialState);

  const providerValue: PostsStatesContextProps = {
    states,
    dispatch,
  };

  return (
    <PostsStatesContext.Provider value={providerValue}>
      {children}
    </PostsStatesContext.Provider>
  );
}

export function usePostsStates() {
  const context = useContext(PostsStatesContext);

  if (!context)
    throw new Error("usePostsStates must be used within a PostsStatesProvider");

  return context;
}
