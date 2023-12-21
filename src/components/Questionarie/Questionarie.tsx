import React, { useEffect, useState } from "react"
import "../Questionarie/questionarie.css"
import Question from "../Question/Question"
import getQuestions from "../../services/getQuestion"
import { QuestionData } from "../../types/Questions"
import Progress from "../Progress/Progress"
import { useNavigate } from "react-router-dom"

export type QuestionarieProps = {
  prompt?: string,
  title?: string
  handleClick?: () => void
  disabled?: boolean
}

const Questionarie: React.FC<QuestionarieProps> = () => {
  const [retrieved, setRetrieved] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [progressQuizz, setProgressQuizz] = useState<number>(1)

  useEffect(() => {
    retrieveQuestions()
  }, [])

  useEffect(() => {
    setRetrieved(true)
  }, [questions])

  const navigate = useNavigate()

  const retrieveQuestions = async () => {
    const result = await getQuestions()
    setQuestions(result)
  }

  const handleClick = () => {
    if (progressQuizz > 9){
      navigate("/resultsReport")
    }
      setProgressQuizz(progressQuizz + 1)
  }

  const first = (): QuestionData => {
    let result: QuestionData = questions[progressQuizz - 1]
    if (!result) result = {
      question: '',
      correct_answer: '',
      incorrect_answers: ['', '', ''],
    }
    return result
  }

  const title: string = 'Quizz'

  return (
    <div className="questionarie">
      <h1 className="title">{title}</h1>
      <Progress 
      progressQuizz={progressQuizz}
      questions={questions}
      />
      <Question
        data={first()}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Questionarie



