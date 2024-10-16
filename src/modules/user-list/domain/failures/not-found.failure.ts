import { HttpStatusCode } from '@/core'

export class NotFoundFailure extends Error {
  statusCode: HttpStatusCode
  constructor() {
    super('Not found.')
    this.name = 'NotFoundError'
    this.statusCode = HttpStatusCode.NOT_FOUND
  }
}
