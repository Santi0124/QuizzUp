import React, { useEffect, useState } from "react"
import "../Questionarie/questionarie.css"
import Question from "../Question/Question"
import getQuestions from "../../services/getQuestion"
import { Questions } from "../../types/Questions"

export type QuestionarieProps = {
  prompt?: string,
  title?: string
  handleClick?: () => void
  disabled?: boolean
}

const Questionarie: React.FC<QuestionarieProps> = () => {

  const [questions, setQuestions] = useState<Questions[]>([])
  useEffect(() => {
    retrieveQuestions()
  }, [])

  const retrieveQuestions = async () => {
    const result = await getQuestions()
    console.log(result)
    setQuestions(result)
  }
  const handleClick = () => {
    console.log("Next Quizz")
  }
  const title: string = 'Quizz'

  return (
    <div className="questionarie">
      <p><h1 className="title">{title}</h1></p>
      <Question prompt="Which is the hull NO. of the Fletcher class destroyer Fletcher?" handleClick={handleClick} />
    </div>
  )
}

export default Questionarie



