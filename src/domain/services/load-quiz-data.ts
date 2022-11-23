import { LoadFunction } from '~/domain/common/types'
import { QuizModel } from '../models'

export interface LoadQuizData extends LoadFunction<LoadQuizData.Response, LoadQuizData.Params> {}

export namespace LoadQuizData {
  export type Params = {
    quizId: string
  }

  export type Response = QuizModel
}
