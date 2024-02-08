import { ReactNode } from 'react';

import { PostsView } from './modules/posts.interface';
import { PostsProvider } from './modules/posts.provider';

export function DotPatternExample(): ReactNode {
  return (
    <PostsProvider>
      <PostsView />
    </PostsProvider>
  );
}
