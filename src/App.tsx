import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './components/Start/Start';
import Questionnarie from './components/Questionnarie/Questionnarie';
import "../src/styles/index.css"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/questionnaire" element={<Questionnarie/>} />
        <Route path="/" element={<Start />} />
      </Routes>
    </Router>
  )
}

export default App
