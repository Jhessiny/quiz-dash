export type QuizModel = {
  id: string
  title: string
  questions: QuestionModel[]
  redirects: RedirectModel[]
}

export type QuestionModel = {
  id: string
  title: string
  answers: AnswerModel[]
}

export type AnswerModel = {
  id: string
  text: string
  tag: string
  score: number
}

export type RedirectModel = {
  totalScore: number
  url: string
}

export type SavedAnswerModel = {
  questionId: string
  score: number
  id: string
  tag: string
}
