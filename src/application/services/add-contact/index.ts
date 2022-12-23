import { QUIZ_API_URL } from '~/application/api/routes'
import { AxiosHttpClient } from '~/infra/protocols'
import { AddContact } from './add-contact'

export const AddContactService = new AddContact(QUIZ_API_URL.BASIC, new AxiosHttpClient())
export { AddContact } from './add-contact'
