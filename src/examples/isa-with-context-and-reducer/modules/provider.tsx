// #region Imports

import { GenericContextProps } from "@/types/global";

import { PostsActionsProvider } from "./actions";
import { PostsStatesProvider } from "./states";

// #endregion

export function PostsProvider({ children }: GenericContextProps) {
  return (
    <PostsStatesProvider>
      <PostsActionsProvider>{children}</PostsActionsProvider>
    </PostsStatesProvider>
  );
}
