/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreApi, UseBoundStore, create } from 'zustand';
import { persist } from 'zustand/middleware';

// #region Interfaces & Types

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

interface PostsStates {
  posts: Post[];
  isLoading: boolean;
  setPosts: (newPosts: Post[]) => void;
  setIsLoading: (newIsLoading: boolean) => void;
}

// #endregion

export const usePostsStore: UseBoundStore<StoreApi<PostsStates>> =
  create<PostsStates>(
    persist(
      (set): PostsStates => ({
        posts: [],
        isLoading: false,
        setPosts: (newPosts: Post[]) => set({ posts: newPosts }),
        setIsLoading: (newIsLoading: boolean) =>
          set({ isLoading: newIsLoading }),
      }),
      { name: 'posts' },
    ) as any,
  );
