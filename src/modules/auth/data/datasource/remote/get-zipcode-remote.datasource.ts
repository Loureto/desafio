import { HttpClient, HttpStatusCode } from '@/core'
import {
  BadRequestFailure,
  IGetZipCode,
  NotFoundFailure,
  UnexpectedFailure
} from '@/modules/auth/domain'

export class GetZipCodeRemoteDataSource implements IGetZipCode {
  constructor(private readonly httpClient: HttpClient<IGetZipCode.Result>) {}

  async get(zipcode: string): Promise<IGetZipCode.Result> {
    const response = await this.httpClient.request({
      method: 'GET',
      url: `ws/${zipcode}/json/`
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
