/* eslint-disable react-hooks/exhaustive-deps */
// #region Imports

import { Context, ReactNode, createContext, useEffect } from 'react';

import { AxiosError } from 'axios';

import { api } from '@/services/api';
import { GenericContextProps } from '@/types/global';

import { Post, usePostsStore } from './states';

// #endregion

export const PostsActionsContext: Context<object> = createContext({});

function PostsActionsProvider({ children }: GenericContextProps): ReactNode {
  const { setIsLoading, setPosts } = usePostsStore();

  async function getPosts(abort: AbortController): Promise<void> {
    setIsLoading(true);

    try {
      const { data } = await api.get<Post[]>('posts/', {
        signal: abort.signal,
      });

      // Slice to just 20 objects
      const formattedData: Post[] = data.slice(0, 20);

      setPosts(formattedData);
    } catch (error) {
      if (abort.signal.aborted) console.log('The user aborted the request.');

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

export { PostsActionsProvider as PostsProvider };
