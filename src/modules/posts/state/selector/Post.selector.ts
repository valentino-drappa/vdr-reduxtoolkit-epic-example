import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { AppState } from "../../../../core/state/interface/AppState.interface";
import { PostState } from "../interface/PostState.interface";

const getPostState = (appState: AppState): PostState => appState.post;

const postStateSelector = createSelector(getPostState, postState => ({
  ...postState
}));

export const usePostStateSelector = () => useSelector(postStateSelector);
