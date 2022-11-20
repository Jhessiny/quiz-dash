export type QuizModel = {
  title: string
  questions: Question[]
  redirects: Redirect[]
}

export type Question = {
  title: string
  answers: Answer[]
}

export type Answer = {
  text: string
  tag: string
  score: number
}

export type Redirect = {
  totalScore: number
  url: string
}
