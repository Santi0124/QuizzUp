import React, { useState } from "react"
import "./selectorCategory.css"

interface SelectorCategoryProps {
  handleCategorySelect: (selectedDifficulty: string) => void;
}


const SelectorCategory: React.FC <SelectorCategoryProps>= () => {
  const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false)
  const [categoryOptionSelected, setcategoryOptionSelected] = useState<string>('')
  const categoryOptions: Array<string> = ['Historic', 'Politics', 'Geography', ]

  const handleClick = () => {
    setIsSelectorVisible(!isSelectorVisible)
  }
  const handleOptionSelect = (category: string) => {
    setIsSelectorVisible(false)
    setcategoryOptionSelected(category)
    handleCategorySelect(category)
  }


return (
  <div className="container">
    <button
      className="dropdownButton"
      onClick={handleClick}>
      Selected Category :  {categoryOptionSelected}
    </button>
    {isSelectorVisible && (
      <ul className="dropdownListCategory">
        {categoryOptions.map((category, index) => (
          <li key={index}
            className="items"
            onClick={() => handleOptionSelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    )}
  </div>
)
}

export default SelectorCategory


function handleCategorySelect(category: string) {
  throw new Error("Function not implemented.");
}

