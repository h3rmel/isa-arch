import { ReactNode } from 'react';

import { PostsView } from './modules/interface';
import { PostsProvider } from './modules/provider';

export function ContextExample(): ReactNode {
  return (
    <PostsProvider>
      <PostsView />
    </PostsProvider>
  );
}
