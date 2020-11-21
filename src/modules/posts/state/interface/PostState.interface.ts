import { EFetchStatus } from "../../../../core/enum/FetchStatus.enum";

export interface PostInfos {
  userId: Number;
  id: Number;
  title: string;
  body: string;
  errorMessage: string;
}

export interface PostState extends PostInfos {
  fetchStatus: EFetchStatus;
}
