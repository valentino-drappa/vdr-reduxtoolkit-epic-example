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
  fetchApiCall = (data: ReadPostFetchPayload) => findPostById(data.postId)

  fetch = (state: PostState, data: ReadPostFetchPayload) => ({
    ...POST_STATE_INTITIAL_STATE,
    fetchStatus: EFetchStatus.PENDING,
  })

  fetchSuccess = (
    state: PostState,
    data: ReadPostFetchSuccessPayload
  ): PostState => ({
    ...data,
    errorMessage: '',
    fetchStatus: EFetchStatus.SUCCESS,
  })

  fetchError = (state: PostState, data: FetchErrorPayload) => {
    return {
      ...POST_STATE_INTITIAL_STATE,
      errorMessage: data.errorMsg,
      fetchStatus: EFetchStatus.ERROR,
    }
  }
}
