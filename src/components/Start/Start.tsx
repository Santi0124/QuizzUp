import React from 'react'
import { useNavigate } from 'react-router-dom'
import './start.css'
import SelectorDifficulty from './Selectors/SelectorDifficulty'
import SelectorCategory from './Selectors/SelectorCategory'


const Start: React.FC = () => {

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/questionaire")
  }

  return (
    <div className='Home'>
      <div className='Container'>
        <span><SelectorDifficulty /></span>
        <span><SelectorCategory /></span>
      </div>
      <button
        className='button'
        onClick={handleButtonClick}>
        Start Test
      </button>
    </div>
  )
}

export default Start
