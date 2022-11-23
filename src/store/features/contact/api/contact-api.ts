import { AddContactService, AddContact } from '~/application/services'
import { api } from '~/store/api/api-slice'

export const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addContact: builder.mutation<AddContact.Response, AddContact.Params>({
      query: (params) => ({
        service: AddContactService,
        params,
      }),
    }),
  }),
})
