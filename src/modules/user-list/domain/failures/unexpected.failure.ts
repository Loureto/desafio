import { HttpStatusCode } from '@/core'

export class UnexpectedFailure extends Error {
  statusCode: HttpStatusCode
  constructor() {
    super('An unexpected error occurred.')
    this.name = 'UnexpectedError'
    this.statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR
  }
}
