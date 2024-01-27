import { PostsView, PostsProviders } from "@/examples/posts-isa-with-context";

export function App() {
  return (
    <PostsProviders>
      <main className="container mt-4 flex justify-center">
        <PostsView />
      </main>
    </PostsProviders>
  );
}
