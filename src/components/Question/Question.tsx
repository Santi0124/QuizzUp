import React, { useState } from "react"
import "./question.css"
import Send from "../ButtonSend/ButtonSend"
import { QuestionData } from "../../types/Questions"

type options = Record<string, string>

export type QuestionProps = {
  handleClick?: () => void
  data: QuestionData
}

const Question: React.FC<QuestionProps> = ({ handleClick, data }) => {

  const [selected, setSelected] = useState<string>('')

  const options = [data.correct_answer, ...data.incorrect_answers]

  const fourAnswers: options = {
    "A": options[0],
    "B": options[1],
    "C": options[2],
    "D": options[3]
  }

  let answer = Object.entries(fourAnswers)

  const shuffle = (answers: Array<[string, string]>) => {
    answers.sort(() => Math.random() - 0.5)
  }

  shuffle(answer)

  const isChecked = (index: string): boolean => {
    return index === selected
  }

  return (
    <div>
      <ul className="answers">
        <h2>{data.question}</h2>
        {answer.map(([index, response]) => (
          <li key={index} className="answerBox">
            <p>
              <span className="response">{response}</span>
              <input
                type="checkbox"
                className="checkbox"
                aria-label={index}
                aria-checked={isChecked(index)}
                checked={isChecked(index)}
                onChange={(e) => setSelected(index)} />
            </p>
          </li>
        ))}
      </ul>
      <Send disabled={!selected} handleClick={handleClick} />
    </div>
  )
}

export default Question