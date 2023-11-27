import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonHome from './components/ButtonHome/ButtonHome';
import Questionnarie from './components/Questionnarie/Questionnarie';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/questionnaire" element={<Questionnarie/>} />
        <Route path="/" element={<ButtonHome />} />
      </Routes>
    </Router>
  )
}

export default App
