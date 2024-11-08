import React, { useEffect, useState } from "react"
import "./question.css"
import Send from "../ButtonSend/ButtonSend"
import { QuestionData } from "../../types/Questions"

type options = Record<string, string>
type HTMLentities = Record<string, string>

export type QuestionProps = {
  handleClick: (answer: string) => void
  data: QuestionData
}

const Question: React.FC<QuestionProps> = ({ handleClick, data }) => {
  const [selected, setSelected] = useState<string>('')
  const [posibleAnswers, setposibleAnswers] = useState<options>({})

  useEffect(() => {
  }, [selected])

  useEffect(() => {
    const options = [data.correct_answer, ...data.incorrect_answers]
    const barajar = shuffled([...options])

    const fourAnswers: options = {
      "A": barajar[0],
      "B": barajar[1],
      "C": barajar[2],
      "D": barajar[3]
    }
    setposibleAnswers(fourAnswers)
  }, [data])

  const shuffled = (options: string[]) => {
    const disorder = [...options].sort(() => Math.random() - 0.5)
    return disorder
  }

  const sendResult = () => {
    handleClick(posibleAnswers[selected])
    setSelected("")
  }

  const isChecked = (index: string): boolean => {
    return index === selected
  }

  let answer = Object.entries(posibleAnswers)

  const replaceEntities = (question: string): string => {
    const entities: HTMLentities = {
      "&#039;": "'",
      "&quot;": '"',
      "&ntilde;": "ñ",
      "&eacute;": "é",
      "&amp;": "&",
      "&uuml;": "ü"
    }
    return question.replace(/&#?\w+;/g, (match) => entities[match])
  }
  return (
    <div >
      <div>
        <ul className="answers">
          <h2 className="questionData">{replaceEntities(data.question)}</h2>
          {answer.map(([index, response]) => (
            <li key={index} className="answerBox">
              <p>
                <span className="response">{response}</span>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    aria-label={index}
                    checked={isChecked(index)}
                    onChange={() => setSelected(index)} />
                </div>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Send disabled={!selected} handleClick={sendResult} />
    </div>
  )
}

export default Question


