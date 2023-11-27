import React, { useState } from "react";
import "../QuestionOne/QuestionOne.css"
import Send from "../ButtonSend/ButtonSend";
import "../ButtonSend/ButtonSend.css"

type respuestas = Record<string, string>

const QuestionOne: React.FC = () => {

  const [sendActive, setSendActive] = useState<boolean>(false)

  const fourAnswers: respuestas = {
    "A": '&&',
    "B": '||',
    "C": '!',
    "D": '%',
  }
  return (
    <div>
      <h2>¿Cuál es el operador lógico AND en muchos lenguajes de programación?</h2>
      <ul className="answers">
        {Object.entries(fourAnswers).map(([index, response]) => (
          <li key={index} className="answerBox">
            <p>
              <div>
                <span className="index">{index}.</span>
                <span className="response">{response}</span>
                <input type="checkbox" className="checkbox" name="checkbox"/>
              </div>
            </p>
          </li>
        ))}
      </ul>
      <Send disabled={true}/>
    </div>
  )
}

export default QuestionOne