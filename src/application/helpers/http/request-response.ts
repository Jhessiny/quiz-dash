import { NotFoundError, UnexpectedError } from '~/domain/exceptions'
import { CombinedPredicated, combinedPredicates, error, success } from '~/domain/common/utils'

import { HttpResponse, HttpStatusCode } from '~/application/protocols/http/http'
import { ServiceCommand } from '~/domain/command/service-command'

export class RequestResponse<R> {
  private constructor(private readonly _response: R) {
    Object.freeze(this)
  }

  public static handle<R>(
    httpResponse: HttpResponse<R>,
  ): ServiceCommand.Response<RequestResponse<R>> {
    try {
      const { statusCode } = httpResponse

      if (this.isSuccess(statusCode) && httpResponse.body?.data) {
        return success(new RequestResponse(httpResponse.body?.data))
      }

      const predicates: CombinedPredicated<ServiceCommand.ResponseError> = [
        [this.isNotFound, new NotFoundError()],
      ]

      const errors = combinedPredicates({
        value: statusCode,
        predicatePairs: predicates,
      })

      if (errors.isError()) {
        return error(errors.value)
      }

      return error(new UnexpectedError())
    } catch (err) {
      return error(new UnexpectedError(err))
    }
  }

  private static isSuccess(statusCode: HttpStatusCode): boolean {
    return statusCode >= 200 && statusCode <= 299
  }

  private static isNotFound(statusCode: HttpStatusCode): boolean {
    return statusCode === HttpStatusCode.notFound
  }

  get response(): R {
    return this._response
  }
}
