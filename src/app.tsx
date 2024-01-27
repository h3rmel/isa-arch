import {
  PostsView,
  PostsProvider,
} from "./examples/isa-with-zustand";

export function App() {
  return (
    <PostsProvider>
      <main className="container mt-4 flex justify-center">
        <PostsView />
      </main>
    </PostsProvider>
  );
}
