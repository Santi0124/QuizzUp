import React, { useState } from "react"
import "./selectorCategory.css"

const SelectorCategory: React.FC = () => {
  const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false)
  const [difficultyOptionSelected, isDifficultyOptionSelected] = useState<string>('')
  const difficultyOptions: Array<string> = ['Historic', 'Politics', 'Geography', 'Sports']

  const handleClick = () => {
    setIsSelectorVisible(!isSelectorVisible)
  }
  const handleOptionSelect = (category: string) => {
    setIsSelectorVisible(false)
    isDifficultyOptionSelected(category)
  }

  return (
    <div className="container">
      <button 
      className="dropdownButton"
       onClick={handleClick}>
      Selected Category :  {difficultyOptionSelected}
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

export default SelectorCategory
