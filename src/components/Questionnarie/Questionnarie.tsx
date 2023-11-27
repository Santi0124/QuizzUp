import React from "react";
import "../Questionnarie/Questionnarie.css"
import QuestionOne from "../QuestionOne/QuestionOne";

const Questionnarie: React.FC = () => {
  return (
    <div className="questionnarie">
      <h1 className="title">QuestionnarieOne</h1>
      <QuestionOne/>
    </div>
  )
}

export default Questionnarie