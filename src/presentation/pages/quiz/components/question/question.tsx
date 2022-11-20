import React from 'react'
import { QuestionModel } from '~/domain/models'

type Props = QuestionModel & {
  handleResponse: () => void
}

export const Question = ({ answers, title, handleResponse }: Props) => {
  return (
    <>
      <div>{title}</div>
      <div>
        {answers.map((answer) => (
          <div key={answer.tag}>
            <input type='radio' value={answer.tag} name={title} />
            <span>{answer.text}</span>
          </div>
        ))}
      </div>
      <button onClick={handleResponse}>next</button>
    </>
  )
}
