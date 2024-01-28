import { ReactNode } from 'react';

import { Post, usePostsStates } from './states';

export function PostsView(): ReactNode {
  const { states } = usePostsStates();

  return (
    <>
      {!states.isLoading ? (
        <section className="flex flex-col items-center gap-4">
          {states.posts.map(
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
