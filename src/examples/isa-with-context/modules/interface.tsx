import { Post, usePostsStates } from "./states";

export function PostsView() {
  const { isLoading, posts } = usePostsStates();

  return (
    <>
      {!isLoading ? (
        <section className="flex flex-col items-center gap-4">
          {posts.map((post: Post) => (
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
