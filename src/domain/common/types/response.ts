import { InvalidCredentialsError, NotFoundError, UnexpectedError } from '../../exceptions'
import { Either } from '../utils/either'

export type ResponseError = InvalidCredentialsError | UnexpectedError | NotFoundError

export type Response<R = unknown> = Either<ResponseError, R>
