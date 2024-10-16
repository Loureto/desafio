import { HttpStatusCode } from '@/core'

export class BadRequestFailure extends Error {
  statusCode: HttpStatusCode
  constructor() {
    super('Bad Request')
    this.name = 'BadRequest'
    this.statusCode = HttpStatusCode.BAD_REQUEST
  }
}
