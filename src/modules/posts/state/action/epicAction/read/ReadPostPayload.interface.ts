import { PostInfos } from '../../../interface/PostState.interface'

// represents the post/read_fetch action payload
export interface ReadPostFetchPayload {
  postId: number
}

// represents the post/read_fetchSuccess action payload
export interface ReadPostFetchSuccessPayload extends PostInfos {}
