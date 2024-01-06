import React from "react";
import { FinalResults } from "../../types/Questionarie";
import "../TableResults/tableResults.css"

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
              <td key={index}>{index + 1}</td>
              <td>{result.correct_answer}</td>
              <td>{result.answer}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table