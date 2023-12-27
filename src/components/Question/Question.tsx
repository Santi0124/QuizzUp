import React, { useEffect, useState } from "react"
import "./question.css"
import Send from "../ButtonSend/ButtonSend"
import { QuestionData } from "../../types/Questions"

type options = Record<string, string>

export type QuestionProps = {
  handleClick: (answer: string) => void
  data: QuestionData
}

const Question: React.FC<QuestionProps> = ({ handleClick, data }) => {
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    console.log(selected)
  }, [selected])
  const options = [data.correct_answer, ...data.incorrect_answers]

  const shuffled = (options: string[]) => {
    const disorder = [...options].sort(() => Math.random() - 0.5)
    return disorder
  }

  const paco = shuffled([...options])

  const fourAnswers: options = {
    "A": paco[0],
    "B": paco[1],
    "C": paco[2],
    "D": paco[3]
  }

  const sendResult = () => {
    handleClick(fourAnswers[selected])
    setSelected("")
  }

  const isChecked = (index: string): boolean => {
    return index === selected
  }

  let answer = Object.entries(fourAnswers)

  return (
    <div >
      <ul className="answers">
        <h2 className="questionData">{data.question}</h2>
        {answer.map(([index, response]) => (
          <li key={index} className="answerBox">
            <p>
              <span className="response">{response}</span>
              <input
                type="checkbox"
                className="checkbox"
                aria-label={index}
                checked={isChecked(index)}
                onChange={() => setSelected(index)} />
            </p>
          </li>
        ))}
      </ul>
      <Send disabled={!selected} handleClick={sendResult} />
    </div>
  )
}

export default Question


