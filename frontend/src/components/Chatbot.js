import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Chatbot from './components/Chatbot';
import Foro from './components/Foro';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Tutoriales from './components/Tutoriales';
import Helpdesk from './components/Helpdesk';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
      </Routes>
    </Router>
  );
}

export default App;
