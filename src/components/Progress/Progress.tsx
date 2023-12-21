import React from "react";
import { QuestionData } from "../../types/Questions";

export type ProgressProps = {
  progressQuizz: number
  questions: QuestionData[]
}

const Progress: React.FC <ProgressProps> = ({progressQuizz, questions}) => {
  const totalQuestions = questions?.length
  return (
    <div>
      <p>{'Quizz ' + progressQuizz + ` /   ${totalQuestions}` }</p>
    </div>
  )
}

export default Progress 