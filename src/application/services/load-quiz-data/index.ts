import { AxiosHttpClient } from '~/infra/protocols'
import { LoadQuizData } from './load-quiz-data'

export const loadQuizDataService = new LoadQuizData(
  import.meta.env.VITE_API_URL,
  new AxiosHttpClient(),
)
