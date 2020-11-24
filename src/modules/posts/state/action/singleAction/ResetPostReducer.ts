import { AbstractSingleReducer } from 'vdr-reduxtoolkit-observable'
import { PostState } from '../../interface/PostState.interface'
import { POST_STATE_INTITIAL_STATE } from '../../constant/PostState.constant'

export class ResetPostReducer extends AbstractSingleReducer<PostState, null> {
  consumeAction = (state: PostState, payload: null): PostState =>
    POST_STATE_INTITIAL_STATE
}
