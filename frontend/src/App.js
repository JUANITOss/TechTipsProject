import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos BrowserRouter, Routes y Route
import Homepage from './components/Homepage'; // Importamos el componente Homepage
import Chatbot from './components/Chatbot'; // Importamos el componente Chatbot
import Foro from './components/Foro'; // Importamos el componente Foro
import PreguntasFrecuentes from './components/PreguntasFrecuentes'; // Importamos el componente PreguntasFrecuentes
import Tutoriales from './components/Tutoriales'; // Importamos el componente Tutoriales
import Helpdesk from './components/Helpdesk'; // Importamos el componente Helpdesk

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
