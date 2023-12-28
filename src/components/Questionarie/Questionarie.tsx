import React, { useEffect, useState } from "react"
import "../Questionarie/questionarie.css"
import Question from "../Question/Question"
import getQuestions from "../../services/getQuestion"
import { QuestionData } from "../../types/Questions"
import Progress from "../Progress/Progress"

export type QuestionarieProps = {
  prompt: string,
  title: string
  handleClick: () => void
  disabled: boolean
  selected: number
}

const Questionarie: React.FC<QuestionarieProps> = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [progressQuizz, setProgressQuizz] = useState<number>(1)
  const [score, setScore] = useState<number>(0)
  const [showResult, setShowResult] = useState<boolean>(false)

  useEffect(() => {
    retrieveQuestions()
  }, [])

  const retrieveQuestions = async () => {
    const result = await getQuestions()
    setQuestions(result)
  }

  const handleClick = (answer: string) => {
    if (answer === current().correct_answer) setScore(score + 1)
    if (progressQuizz > 9) {
      setShowResult(true)
      setScore(score)
    }
    setProgressQuizz(progressQuizz + 1)
  }

  const current = (): QuestionData => {
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
      {showResult ? (
        <h1 className="correctAnswer">Correct Answer : {score}</h1>
      ) : (
        <>
          <h1 className="title">{title}</h1>
          <Question
            data={current()}
            handleClick={handleClick} />
          <Progress
            progressQuizz={progressQuizz}
            questions={questions} />
        </>
      )}
    </div>
  )
}


export default Questionarie



