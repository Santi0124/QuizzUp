import React from "react";
import { FinalResults } from "../../types/Questionarie";
import "../TableResults/tableResults.css"
import ItemList from "../ItemList/ItemList";

export type TableProps = {
  newSolution: FinalResults[]
}

const Table: React.FC<TableProps> = ({ newSolution }) => {
  return (
    <div className="viewResults">
      <table className="styled-table">
        <thead>
          <tr>
            <td>Question Number</td>
            <td>Question answered</td>
            <td>Correct Answer</td>
          </tr>
        </thead>
        <tbody>
          {newSolution.map((result, index) => (
            <tr >
              <ItemList
                questionNumber={index + 1}
                questionAnswered={result.answer}
                correctAnswer={result.correct_answer} />
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table