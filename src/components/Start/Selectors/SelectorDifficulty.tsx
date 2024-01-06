
import React, { useState } from "react"
import "./selectorDifficulty.css"

const SelectorDifficulty: React.FC = () => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const difficulty: Array<string> = ['Any Difficulty', 'Easy', 'Medium', 'Hard'];

  const handleClick = () => {
    setIsSelectorVisible(!isSelectorVisible)
  }

  return (
    <div className="containerParams">
      <button className="dropdownButton" onClick={handleClick}>
        Selected Difficulty:
      </button>
      {isSelectorVisible && (
        <ul className="ddddddd">
          {difficulty.map((difficulty, index) => (
            <li key={index} className="items">
              {difficulty}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectorDifficulty
