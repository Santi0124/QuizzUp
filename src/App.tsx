import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Start from './components/Start/Start'
import Questionarie from './components/Questionarie/Questionarie'
import "../src/styles/index.css"

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Start />} />
          <Route
            path="/questionaire"
            element={<Questionarie />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
