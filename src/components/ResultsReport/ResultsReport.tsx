import React from "react";

export type ResultsReportProps = {
  correctAnswer: [number]
  incorrectAnswer: [number]
}

const ResultsReport: React.FC<ResultsReportProps> = ({ correctAnswer, incorrectAnswer }) => {
  const totalCorrect = correctAnswer
  const totalInCorrect = incorrectAnswer
  return (
    <div>
      TIEMPO:
      <br />
      <p>Respuestas correctas:{totalCorrect}</p>
      <br />
      <p>Respuestas incorrectas:{totalInCorrect}</p>
    </div>
  )
}

export default ResultsReport