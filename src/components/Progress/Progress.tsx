import React from "react";
import { QuestionData } from "../../types/Questions";
import "../Progress/progress.css"

export type ProgressProps = {
  progressQuizz: number
  questions: QuestionData[]
}

const Progress: React.FC <ProgressProps> = ({progressQuizz, questions}) => {
  const totalQuestions = questions.length
  return (
    <div className="progress">
       <h3>{progressQuizz} / {totalQuestions}</h3>
    </div>
  )
}

export default Progress 