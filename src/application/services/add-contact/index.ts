import { AxiosHttpClient } from '~/infra/protocols'
import { AddContact } from './add-contact'

export const AddContactService = new AddContact(import.meta.env.VITE_API_URL, new AxiosHttpClient())
export { AddContact } from './add-contact'
