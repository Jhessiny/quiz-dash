export type QuizModel = {
  title: string
  questions: QuestionModel[]
  redirects: RedirectModel[]
}

export type QuestionModel = {
  title: string
  answers: AnswerModel[]
}

export type AnswerModel = {
  text: string
  tag: string
  score: number
}

export type RedirectModel = {
  totalScore: number
  url: string
}
