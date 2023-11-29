import React, { useState } from "react";
import "./question.css"
import Send from "../ButtonSend/ButtonSend";

type options = Record<string, string>

export type QuestionProps = {
  promt?: string,
  handleClick?: () => void
}

const Question: React.FC<QuestionProps> = ({handleClick}) => {

  const [selected, setSelected] = useState<string>('')

  const fourAnswers: options = {
    "A": '&&',
    "B": '||',
    "C": '!',
    "D": '%',
  }

  const isChecked = (index: string): boolean => {
    return index === selected
  }

  return (
    <div>
      <ul className="answers">
        {Object.entries(fourAnswers).map(([index, response]) => (
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