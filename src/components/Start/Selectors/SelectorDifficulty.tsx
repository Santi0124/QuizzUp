import React, { useState } from "react";
import "./selectorDifficulty.css";

interface SelectorDifficultyProps {
  handleDifficultySelect: (selectedDifficulty: string) => void;
}

const SelectorDifficulty: React.FC<SelectorDifficultyProps> = ({ handleDifficultySelect }) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false);
  const [difficultyOptionSelected, setDifficultyOptionSelected] = useState<string>("");
  const difficultyOptions: Array<string> = [ 'Easy', 'Medium', 'Hard'];

  const handleClick = () => {
    setIsSelectorVisible(!isSelectorVisible);
  };

  const handleOptionSelect = (difficulty: string) => {
    setIsSelectorVisible(false);
    setDifficultyOptionSelected(difficulty);
    handleDifficultySelect(difficulty);
  };

  return (
    <div className="containerParams">
      <button className="dropdownButton" onClick={handleClick}>
        Selected Difficulty: {difficultyOptionSelected}
      </button>
      {isSelectorVisible && (
        <ul className="dropdownListDifficulty">
          {difficultyOptions.map((difficulty, index) => (
            <li key={index} className="items" onClick={() => handleOptionSelect(difficulty)}>
              {difficulty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectorDifficulty;
