// import { PostsView, PostsProviders } from "@/examples/isa-with-context";
import {
  PostsView,
  PostsProviders,
} from "./examples/isa-with-context-and-reducer";

export function App() {
  return (
    <PostsProviders>
      <main className="container mt-4 flex justify-center">
        <PostsView />
      </main>
    </PostsProviders>
  );
}
