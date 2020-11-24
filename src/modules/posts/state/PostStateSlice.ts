import { AbstractStateSlice } from 'vdr-reduxtoolkit-observable'
import { PostState } from './interface/PostState.interface'
import { POST_STATE_INTITIAL_STATE } from './constant/PostState.constant'
import { ReadPostFetchPayload } from './action/epicAction/read/ReadPostPayload.interface'
import { ReadPostReducer } from './action/epicAction/read/ReadPost.reducer'
import { ResetPostReducer } from './action/singleAction/ResetPostReducer'

const SLICE_NAME = 'post'
class PostStateSlice extends AbstractStateSlice<PostState> {
  // all our action will be prefixed by this value
  getSliceName = () => SLICE_NAME
  // provide the initial state
  getInitialState = () => POST_STATE_INTITIAL_STATE
}

const postSlice = new PostStateSlice(
  [
    //provide a list of AbstractEpicReducer
    // the library will generate and manage three actions  post/read_fetch, post/read_fetchSuccess, post/read_fetchError
    new ReadPostReducer(SLICE_NAME, 'read'),
  ],
  [
    //provide a list of  AbstractSingleReducer
    // the library will generate an action 'post/reset'
    new ResetPostReducer('reset'),
  ]
)

//get the reducers in order to add them to the state
export const postReducers = postSlice.slice.reducer

//get the epics in order to add them to the state epic
export const postEpic = postSlice.epic

//action to trigger to load a post
export const getActionFindPostById = (x: ReadPostFetchPayload) =>
  postSlice.slice.actions.read_fetch(x)

//action to trigger to reset the state
export const getActionResetPost = () =>
  postSlice.slice.actions.reset('qsdqdsqdsqdsqdsqdsqd')
