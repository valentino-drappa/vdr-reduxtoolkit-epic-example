import { PostInfos } from '../../../interface/PostState.interface';

export interface ReadPostFetchPayload {
  postId: number;
}

export interface ReadPostFetchSuccessPayload extends PostInfos {}
