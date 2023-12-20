import React, { useEffect, useState } from "react"
import "../Questionarie/questionarie.css"
import Question from "../Question/Question"
import getQuestions from "../../services/getQuestion"
import { QuestionData } from "../../types/Questions"

export type QuestionarieProps = {
  prompt?: string,
  title?: string
  handleClick?: () => void
  disabled?: boolean
}

const Questionarie: React.FC<QuestionarieProps> = () => {
  const [retrieved, setRetrieved] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionData[]>([])

  useEffect(() => {
    retrieveQuestions()
  }, [])

  useEffect(() => {
    setRetrieved(true)
    console.log(retrieved)
  }, [questions])

  const retrieveQuestions = async () => {
    const result = await getQuestions()
    console.log(result)
    setQuestions(result)
  }

  const handleClick = () => {
    console.log("Next Quizz")
  }
  const first = (): QuestionData => {
    let result: QuestionData = questions[0]
    if (!result) result = {
      question: '',
      correct_answer: '',
      incorrect_answers:['','',''],
    }
    return result
  }

  const title: string = 'Quizz'

  return (
    <div className="questionarie">
      <h1 className="title">{title}</h1>
      <Question
        data={first()}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Questionarie



