import { PostState } from "../interface/PostState.interface";
import { EFetchStatus } from "../../../../core/enum/FetchStatus.enum";

export const POST_STATE_INTITIAL_STATE: PostState = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
  fetchStatus: EFetchStatus.NONE,
  errorMessage: ""
};
