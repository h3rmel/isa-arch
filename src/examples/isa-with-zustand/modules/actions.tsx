/* eslint-disable react-hooks/exhaustive-deps */
// #region Imports

import { AxiosError } from 'axios';

import { api } from '@/services/api';

import { Post, usePostsStore } from './states';

// #endregion

export function usePostsActions() {
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

  return { getPosts };
}
