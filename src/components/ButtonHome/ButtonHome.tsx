import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonHome.css';

const ButtonHome: React.FC = () => {
  return (
    <div className='Home'>
      <Link to='/questionnaire'>
        <button className='button'>Start Test</button>
      </Link>
    </div>
  )
}

export default ButtonHome;
