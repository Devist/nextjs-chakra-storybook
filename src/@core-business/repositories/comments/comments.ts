import { ICommentData } from '@core-business/entities'
import { APIClient } from '@core-business/network/APIClient'
import { CommentAPI } from '@core-business/network/apis/CommentAPI'
import { ICommentsRepository } from './comments.types'

export class CommentsRepository implements ICommentsRepository {
  async fetchItems(postId: number): Promise<ICommentData[]> {
    return await APIClient.shared.request(new CommentAPI.FetchAll(postId))
  }

  async saveItem(postId: number, params: ICommentData): Promise<ICommentData> {
    return await APIClient.shared.request(new CommentAPI.Create(postId, params))
  }
}
