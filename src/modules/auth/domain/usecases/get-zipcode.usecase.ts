import { ZipCodeResult } from '../models'

export interface IGetZipCode {
  get: (zipcode: string) => Promise<IGetZipCode.Result>
}

export namespace IGetZipCode {
  export type Result = ZipCodeResult
}
