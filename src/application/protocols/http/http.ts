export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpResponse<R = any> = {
  statusCode: HttpStatusCode
  body?: HttpResponseBody<R>
}

type HttpResponseBody<R> = {
  data?: R
  errors?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  formError = 421,
  unprocessableEntity = 422,
  serverError = 500,
}
