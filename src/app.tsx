// #region Imports

import { ReactNode } from 'react';

// import { PostsView } from '@/examples/normal';
// import { PostsView, PostsProvider } from '@/examples/isa-with-context';
// import { PostsView, PostsProvider } from '@/examples/isa-with-context-and-reducer';
import { PostsView, PostsProvider } from '@/examples/isa-with-zustand';

// #endregion

export function App(): ReactNode {
  return (
    <PostsProvider>
      <main className="container mt-4 flex justify-center">
        <PostsView />
      </main>
    </PostsProvider>
  );
}
