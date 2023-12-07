import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Start from './components/Start/Start';
import Questionnarie from './components/Questionnarie/Questionnarie';
import "../src/styles/index.css"

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/questionnaire" element={<Questionnarie />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
