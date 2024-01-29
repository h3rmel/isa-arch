import { ReactNode } from 'react';

import { PostsView } from '@/examples/isa-with-zustand';

export function App(): ReactNode {
  return (
    <main className="container mt-4 flex justify-center">
      <PostsView />
    </main>
  );
}
