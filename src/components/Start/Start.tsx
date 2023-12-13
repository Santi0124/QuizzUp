import React from 'react'
import { Router, useNavigate } from 'react-router-dom'
import './start.css'


const Start: React.FC = () => {

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/questionaire")
  }

  return (
    <div className='Home'>
      <button
        className='button'
        onClick={handleButtonClick}>
        Start Test
      </button>
    </div>
  )
}

export default Start
