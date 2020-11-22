import { EFetchStatus } from '../../../../core/enum/FetchStatus.enum'

export interface PostInfos {
  userId: Number
  id: Number
  title: string
  body: string
}

export interface PostState extends PostInfos {
  errorMessage: string
  fetchStatus: EFetchStatus
}
