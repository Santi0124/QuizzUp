import React from 'react'
import { useNavigate } from 'react-router-dom'
import './start.css'
import SelectorDifficulty from './Selectors/SelectorDifficulty'


const Start: React.FC = () => {

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/questionaire")
  }

  return (
    <div className='Home'>
      <SelectorDifficulty/>
      <button
        className='button'
        onClick={handleButtonClick}>
        Start Test
      </button>
    </div>
  )
}

export default Start
