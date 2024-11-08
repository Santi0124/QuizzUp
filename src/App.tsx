import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './components/Start/Start';
import Questionarie from './components/Questionarie/Questionarie';
import "../src/styles/index.css";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Start />} />
          <Route
            path="/questionaire"
            element={<Questionarie difficulty={''} category={''} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
