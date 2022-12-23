import { urlWithParamsFactory } from './../helpers/make-api-url'
import { makeApiUrl } from '../helpers/make-api-url'

export const ADMIN_API_ROUTES = {
  CONTACTS: makeApiUrl('admin/contacts'),
}

export const QUIZ_API_URL = {
  BASIC: urlWithParamsFactory('quiz/{id}'),
}
