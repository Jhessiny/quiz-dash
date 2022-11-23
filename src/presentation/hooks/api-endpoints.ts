import { contactApi } from '~/store/features/contact/api/contact-api'
import { quizApi } from '~/store/features/quiz/api/quiz-api'

export const { useGetQuizDataQuery } = quizApi
export const { useAddContactMutation } = contactApi
