import { AbstractStateSlice } from 'vdr-reduxtoolkit-observable'
import { PostState } from './interface/PostState.interface'
import { POST_STATE_INTITIAL_STATE } from './constant/PostState.constant'
import { ReadPostFetchPayload } from './action/epicAction/read/ReadPostPayload.interface'
import { ReadPostReducer } from './action/epicAction/read/ReadPost.reducer'
import { ResetPostReducer } from './action/singleAction/ResetPostReducer'

const SLICE_NAME = 'post'
class PostStateSlice extends AbstractStateSlice<PostState> {
  getSliceName = () => SLICE_NAME
  getInitialState = () => POST_STATE_INTITIAL_STATE
}

const postSlice = new PostStateSlice(
  [new ReadPostReducer(SLICE_NAME, 'read')],
  [new ResetPostReducer('reset')]
)
export const postReducers = postSlice.slice.reducer
export const postEpic = postSlice.epic
export const getActionFindPostById = (x: ReadPostFetchPayload) =>
  postSlice.slice.actions.read_fetch(x)
export const getActionResetPost = () => postSlice.slice.actions.reset(null)
