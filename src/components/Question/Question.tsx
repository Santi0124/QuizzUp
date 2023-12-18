import React, { useState } from "react"
import "./question.css"
import Send from "../ButtonSend/ButtonSend"

type options = Record<string, string>

export type QuestionProps = {
  prompt: string,
  handleClick?: () => void
  options: options
}

const Question: React.FC<QuestionProps> = ({ handleClick, prompt, options }) => {

  const [selected, setSelected] = useState<string>('')

  const fourAnswers: options = {
    "A": options.A,
    "B": options.B,
    "C": options.C,
    "D": options.D,
  }

  let keyArrays = Object.entries(fourAnswers)

  const shuffle = (keyArrays: Array<[string, string]>) => {
    keyArrays.sort(() => Math.random() - 0.5)
  }

  shuffle(keyArrays)

  const isChecked = (index: string): boolean => {
    return index === selected
  }

  return (
    <div>
      <ul className="answers">
        <h2>{prompt}</h2>
        {keyArrays.map(([index, response]) => (
          <li key={index} className="answerBox">
            <p>
              <span className="index">{index}.</span>
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