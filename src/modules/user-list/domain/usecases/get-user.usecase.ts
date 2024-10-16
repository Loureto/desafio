import { UserModel } from '../models'

export interface IGetUserUsecase {
  getUsers: (params: IGetUserUsecase.Params) => Promise<IGetUserUsecase.Result>
}

export namespace IGetUserUsecase {
  export type Result = UserModel

  export type Params = {
    page: number
    limit: number
  }
}
