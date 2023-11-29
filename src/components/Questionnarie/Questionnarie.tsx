import React from "react";
import "../Questionnarie/questionnarie.css"
import Question from "../Question/Question";
import Send from "../ButtonSend/ButtonSend";

export type QuestionnarieProps = {
  prompt?: string,
  title?: string
  handleClick?: () => void
  disabled?:boolean
}

const Questionnarie: React.FC<QuestionnarieProps> = () => {
  const handleClick = () => {
    console.log("Next Quizz")
  }

  const title: string = 'Quizz'
  const prompt = "¿Cuál es el operador lógico AND en muchos lenguajes de programación?"

  return (
    <div className="questionnarie">
      <h1 className="title">{title}</h1>
      <h2>{prompt}</h2>
      <Question promt={""} handleClick={handleClick}/>
    </div>
  )
}

export default Questionnarie