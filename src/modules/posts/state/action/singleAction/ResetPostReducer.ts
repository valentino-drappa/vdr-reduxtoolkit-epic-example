import { AbstractSingleReducer } from 'vdr-reduxtoolkit-observable'
import { PostState } from '../../interface/PostState.interface'
import { POST_STATE_INTITIAL_STATE } from '../../constant/PostState.constant'
import { SingleAction } from 'vdr-reduxtoolkit-observable/lib/interface/SingleAction.interface'

export class ResetPostReducer extends AbstractSingleReducer<PostState, null> {
  // /!\ SingleAction is provided by the library
  consumeAction = (state: PostState, action: SingleAction<null>): PostState =>
    POST_STATE_INTITIAL_STATE
}
