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
      correct_answers: '',
      incorrect_answers: '',
    }
    return result
  }

  const title: string = 'Quizz'

  return (
    <div className="questionarie">
      <h1 className="title">{title}</h1>
      <Question
        prompt={first().question}
        handleClick={handleClick}
        options={{
          A: first().correct_answers,
          B: first().incorrect_answers[0],
          C: first().incorrect_answers[1],
          D: first().incorrect_answers[2],
        }}
      />
    </div>
  )
}

export default Questionarie



