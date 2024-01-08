import React from "react";
import "../ItemList/itemList.css"

export type ItemListProps = {
  questionNumber: number
  questionAnswered: string
  correctAnswer: string
}

const ItemList: React.FC<ItemListProps> = ({
  questionNumber,
  questionAnswered,
  correctAnswer
}) => {
  const responsePassed = questionAnswered === correctAnswer
  const result = responsePassed ? 'correct' : 'answered'
  return (
    <>
      <td>{questionNumber}</td>
      <td className={result}>{questionAnswered}</td>
      <td className="correct">{correctAnswer}</td>
    </>
  )
}

export default ItemList