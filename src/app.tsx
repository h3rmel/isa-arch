import { PostsView, PostsProviders } from "@/examples/posts-isa";

export function App() {
  return (
    <PostsProviders>
      <main className="container mt-4 flex justify-center">
        <PostsView />
      </main>
    </PostsProviders>
  );
}
