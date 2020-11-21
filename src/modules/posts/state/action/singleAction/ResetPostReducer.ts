import { AbstractSingleReducer } from "vdr-reduxtoolkit-observable";
import { PostState } from "../../interface/PostState.interface";
import { Action } from "redux";
import { POST_STATE_INTITIAL_STATE } from "../../constant/PostState.constant";

export class ResetPostReducer extends AbstractSingleReducer<PostState, null> {
  consumeAction = (state: PostState, action: Action<null>): PostState =>
    POST_STATE_INTITIAL_STATE;
}
