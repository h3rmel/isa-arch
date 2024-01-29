/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from 'react';

import { usePostsActions } from './actions';
import { Post, usePostsStore } from './states';

export function PostsView(): ReactNode {
  const { isLoading, posts } = usePostsStore();
  const { getPosts } = usePostsActions();

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
          {posts.map(
            (post: Post): ReactNode => (
              <article
                key={post.id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              </article>
            ),
          )}
        </section>
      ) : (
        <span className="loading loading-infinity loading-lg"></span>
      )}
    </>
  );
}
