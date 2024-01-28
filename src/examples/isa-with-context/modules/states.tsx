/* eslint-disable react-refresh/only-export-components */
// #region Imports

import { Context, ReactNode, createContext, useContext, useState } from 'react';

import { GenericContextProps } from '@/types/global';

// #endregion

// #region Interfaces & Types

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export interface PostsStatesContextProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// #endregion

export const PostsStatesContext: Context<PostsStatesContextProps> =
  createContext<PostsStatesContextProps>({} as PostsStatesContextProps);

export function PostsStatesProvider({
  children,
}: GenericContextProps): ReactNode {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const providerValue: PostsStatesContextProps = {
    posts,
    setPosts,
    isLoading,
    setIsLoading,
  };

  return (
    <PostsStatesContext.Provider value={providerValue}>
      {children}
    </PostsStatesContext.Provider>
  );
}

export function usePostsStates(): PostsStatesContextProps {
  const context: PostsStatesContextProps = useContext(PostsStatesContext);

  if (!context)
    throw new Error('usePostsStates must be used within a PostsStatesProvider');

  return context;
}
