import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';
import SelectorDifficulty from './Selectors/SelectorDifficulty';
import SelectorCategory from './Selectors/SelectorCategory';

const Start: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string>('easy')
  const [category, setCategory] = useState <string>('Politics')



  const handleDifficultySelect = (selectedDifficulty: string) => {
    setDifficulty(selectedDifficulty)
  }

  const handleCategorySelect = (SelectorCategory:string)=>{
    setCategory(SelectorCategory)
  }

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/questionaire", { state: { difficulty, category }});
  };

  return (
    <div className='Home'>
      <div>
        <h1 className='h1'>QuizUpp</h1>
        <div className='Container'>
          <span><SelectorDifficulty handleDifficultySelect={handleDifficultySelect} /></span>
          <span><SelectorCategory handleCategorySelect={handleCategorySelect}/></span>
        </div>
        <button
          className='button'
          onClick={handleButtonClick}>
          Start Test
        </button>
      </div>
    </div>
  );
}

export default Start;
