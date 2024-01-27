import { PostsView } from "./features/posts-isa/interface";
import { PostsProviders } from "./features/posts-isa/provider";

export function App() {
  return (
    <PostsProviders>
      <main className="container mt-4 flex justify-center">
        <PostsView />
      </main>
    </PostsProviders>
  );
}
