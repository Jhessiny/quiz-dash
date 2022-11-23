import { Either } from '../common/utils'
import { DomainException } from '../exceptions'

export interface ServiceCommand<R = any, T = any> {
  execute: (params: T) => Promise<ServiceCommand.Response<R>>
}

export namespace ServiceCommand {
  export type Response<R = any> = Either<ResponseError, R>
  export type ResponseError<E = DomainException> = E
}
