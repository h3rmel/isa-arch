// #region Imports

import { ReactNode } from 'react';

import { GenericContextProps } from '@/types/global';

import { PostsActionsProvider } from './actions';
import { PostsStatesProvider } from './states';

// #endregion

export function PostsProvider({ children }: GenericContextProps): ReactNode {
  return (
    <PostsStatesProvider>
      <PostsActionsProvider>{children}</PostsActionsProvider>
    </PostsStatesProvider>
  );
}
