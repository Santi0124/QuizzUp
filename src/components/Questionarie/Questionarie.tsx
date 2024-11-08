import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "../Questionarie/questionarie.css"
import Question from "../Question/Question"
import getQuestions from "../../services/getQuestion"
import { QuestionData } from "../../types/Questions"
import Progress from "../Progress/Progress"
import { FinalResults } from "../../types/Questionarie"
import Table from "../TableResults/TableResults"
import "../TableResults/tableResults.css"

type QuestionarieProps = {
  difficulty: string;
  category: string;
}

const Questionaire: React.FC<QuestionarieProps> = () => {
  const location = useLocation()
  const { difficulty, category } = location.state

  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [progressQuizz, setProgressQuizz] = useState<number>(1)
  const [score, setScore] = useState<number>(0)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [solution, setSolution] = useState<Array<FinalResults>>([])

  useEffect(() => {
    const retrieveQuestions = async () => {
      const result = await getQuestions(difficulty, category)
      setQuestions(result)
    }
    retrieveQuestions()
  }, [difficulty])



  const handleClick = (answer: string) => {
    if (answer === current().correct_answer) setScore(score + 1)
    if (progressQuizz > 4) {
      setShowResult(true)
    }
    const results: FinalResults = { answer, correct_answer: current().correct_answer }
    const newSolution: Array<FinalResults> = [...solution, results]
    setSolution(newSolution)
    setProgressQuizz(progressQuizz + 1)
  }

  const current = (): QuestionData => {
    let result: QuestionData = questions[progressQuizz - 1]
    if (!result) result = { question: '', correct_answer: '', incorrect_answers: ['', '', ''] }
    return result
  }

  const title : string = 'Quizz'
  return (
    <div className="questionarie">
      {showResult ? (
        <div>
          <Table newSolution={solution} />
        </div>
      ) : (
        <>
          <h1 className="title">{title}</h1>
          <Question data={current()} handleClick={handleClick} />
          <Progress progressQuizz={progressQuizz} questions={questions} />
        </>
      )}
    </div>
  )
}

export default Questionaire;
