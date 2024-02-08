/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
// #region Imports

import {
    Context,
    ReactNode,
    createContext,
    useContext,
    useEffect,
  } from 'react';
  
  import { AxiosError } from 'axios';
  
  import { api } from '@/services/api';
  import { GenericContextProps } from '@/types/global';
  
  import { Post, PostsStatesContext } from './posts.states';
  
  // #endregion
  
  export const PostsActionsContext: Context<object> = createContext({});
  
  export function PostsActionsProvider({
    children,
  }: GenericContextProps): ReactNode {
    const { setIsLoading, setPosts } = useContext(PostsStatesContext);
  
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
  
  export function usePostsActions(): object {
    const context = useContext(PostsActionsContext);
  
    if (!context)
      throw new Error(
        'usePostsActions must be used within a PostsActionsProvider',
      );
  
    return context;
  }
  