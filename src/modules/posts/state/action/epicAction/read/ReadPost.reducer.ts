import { PostState } from '../../../interface/PostState.interface'
import {
  ReadPostFetchPayload,
  ReadPostFetchSuccessPayload,
} from './ReadPostPayload.interface'
import { EFetchStatus } from '../../../../../../core/enum/FetchStatus.enum'
import { findPostById } from '../../../../api/PostApi'
import {
  FetchErrorPayload,
  AbstractEpicReducer,
} from 'vdr-reduxtoolkit-observable'
import { POST_STATE_INTITIAL_STATE } from '../../../constant/PostState.constant'

export class ReadPostReducer extends AbstractEpicReducer<
  PostState,
  ReadPostFetchPayload,
  ReadPostFetchSuccessPayload
> {
  // Schema step 5 - make the api call
  fetchApiCall = (data: ReadPostFetchPayload) => findPostById(data.postId)

  // Schema step 3 - reducer for the post/read_fetch action
  fetch = (state: PostState, data: ReadPostFetchPayload) => ({
    ...POST_STATE_INTITIAL_STATE,
    fetchStatus: EFetchStatus.PENDING,
  })

  // Schema step 8 - reducer for the post/read_fetchSuccess action
  fetchSuccess = (
    state: PostState,
    data: ReadPostFetchSuccessPayload
  ): PostState => ({
    ...data,
    errorMessage: '',
    fetchStatus: EFetchStatus.SUCCESS,
  })

  // Schema step 8 - reducer for the post/read_fetchError action
  // /!\ FetchErrorPayload is provided by the library
  fetchError = (state: PostState, data: FetchErrorPayload) => {
    return {
      ...POST_STATE_INTITIAL_STATE,
      errorMessage: data.errorMsg,
      fetchStatus: EFetchStatus.ERROR,
    }
  }
}
