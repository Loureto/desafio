import { HttpClient, HttpStatusCode } from '@/core'
import {
  BadRequestFailure,
  IGetUserUsecase,
  NotFoundFailure,
  UnexpectedFailure
} from '@/modules/user-list/domain'

export class GetUserRemoteDatasource implements IGetUserUsecase {
  constructor(
    private readonly httpClient: HttpClient<IGetUserUsecase.Result>
  ) {}
  async getUsers(
    params: IGetUserUsecase.Params
  ): Promise<IGetUserUsecase.Result> {
    const response = await this.httpClient.request({
      method: 'GET',
      url: `/users?page=${params.page}&limit=${params.limit}`
    })

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return response.body
      case HttpStatusCode.NOT_FOUND:
        throw new NotFoundFailure()
      case HttpStatusCode.BAD_REQUEST:
        throw new BadRequestFailure()
      default:
        throw new UnexpectedFailure()
    }
  }
}
