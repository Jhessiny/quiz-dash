import React from 'react'
import { QuestionModel } from '~/domain/models'
import { useStyles } from './question-styles'

type Props = QuestionModel & {
  handleResponse: () => void
}

export const Question = ({ answers, title, handleResponse }: Props) => {
  const { classes } = useStyles()
  return (
    <div className={classes.question}>
      <div className={classes.title}>{title}</div>
      <div>
        {answers.map((answer) => (
          <div key={answer.tag} className={classes.inputWrapper}>
            <input type='radio' value={answer.tag} name={title} />
            <span>{answer.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
