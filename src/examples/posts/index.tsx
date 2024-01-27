import { useEffect, useState } from "react";

import { api } from "@/services/api";
import { AxiosError } from "axios";

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getPosts() {
    setIsLoading(true);

    try {
      const { data } = await api.get("posts/");

      setPosts(data);
    } catch (error) {
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
    getPosts();
  }, []);

  return (
    <>
      {!isLoading ? (
        <section className="flex flex-col items-center gap-4">
          {posts.map((post) => (
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
