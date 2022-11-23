import { loadQuizDataService } from '~/application/services'
import { LoadQuizData } from '~/domain/services'
import { api } from '~/store/api/api-slice'

export const quizApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getQuizData: builder.query<LoadQuizData.Response, LoadQuizData.Params>({
      query: (params) => ({
        service: loadQuizDataService,
        params,
      }),
    }),
  }),
})
