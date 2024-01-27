/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { usePosts } from "./context";
import { IPost } from "./context/modules/states";

export function PostsView() {
  const { actionsPosts, statesPosts } = usePosts();

  const { isLoading, posts } = statesPosts;
  const { getPosts } = actionsPosts;

  useEffect(() => {
    const abortController = new AbortController();

    getPosts(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {!isLoading ? (
        <section className="flex flex-col items-center gap-4">
          {posts.map((post: IPost) => (
            <article key={post.id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <span className="loading loading-infinity loading-lg"></span>
      )}
    </>
  );
}
