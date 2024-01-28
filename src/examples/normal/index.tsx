// #region Imports

import { ReactNode, useEffect, useState } from 'react';

import { AxiosError } from 'axios';

import { api } from '@/services/api';

// #endregion

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export function PostsView(): ReactNode {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getPosts(abort: AbortController): Promise<void> {
    setIsLoading(true);

    try {
      const { data } = await api.get('posts/', { signal: abort.signal });

      setPosts(data);
    } catch (error) {
      if (abort.signal.aborted) console.log('The user aborted the request.');

      const axiosError = error as AxiosError;

      if (axiosError)
        console.error({
          message: axiosError.message,
          status: axiosError.status,
        });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }

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
