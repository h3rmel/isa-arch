import { createContext } from "react";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsStatesContext {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PostsStatesContext = createContext<PostsStatesContext>(
  {} as PostsStatesContext
);
