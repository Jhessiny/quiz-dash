import { QuestionModel, SavedAnswerModel } from '~/domain/models'
import { Answer } from '../answer/answer'
import { useStyles } from './question-styles'

type Props = QuestionModel & {
  handleResponse: (answer: SavedAnswerModel) => void
}

export const Question = ({ answers, title, handleResponse, id }: Props) => {
  const { classes } = useStyles()
  return (
    <div className={classes.question}>
      <div className={classes.title}>{title}</div>
      <div>
        {answers.map((answer) => (
          <Answer
            key={answer.text}
            {...answer}
            name={title}
            handleResponse={handleResponse}
            questionId={id}
          />
        ))}
      </div>
    </div>
  )
}
