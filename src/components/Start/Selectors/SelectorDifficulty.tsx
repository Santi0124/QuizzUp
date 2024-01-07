import React, { useState } from "react"
import "./selectorDifficulty.css"

const SelectorDifficulty: React.FC = () => {
  const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false)
  const [difficultyOptionSelected, isDifficultyOptionSelected] = useState<string>('Any Difficulty')
  const difficultyOptions: Array<string> = ['Any Difficulty', 'Easy', 'Medium', 'Hard']

  const handleClick = () => {
    setIsSelectorVisible(true)
  }
  const handleOptionSelect = (difficulty: string) => {
    setIsSelectorVisible(false)
    isDifficultyOptionSelected(difficulty)
  }

  return (
    <div className="containerParams">
      <button className="dropdownButton" onClick={handleClick}>
        Selected Difficulty :  {difficultyOptionSelected}
      </button>
      {isSelectorVisible && (
        <ul className="dropdownList">
          {difficultyOptions.map((difficulty, index) => (
            <li key={index}
              className="items"
              onClick={() => handleOptionSelect(difficulty)}>
              {difficulty}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectorDifficulty
