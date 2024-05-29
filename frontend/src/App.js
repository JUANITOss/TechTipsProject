import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos BrowserRouter, Routes y Route
import Homepage from './components/Homepage'; // Importamos el componente Homepage
import Chatbot from './components/Chatbot'; // Importamos el componente Chatbot
import Foro from './components/Foro'; // Importamos el componente Foro
import PreguntasFrecuentes from './components/PreguntasFrecuentes'; // Importamos el componente PreguntasFrecuentes
import Tutoriales from './components/Tutoriales'; // Importamos el componente Tutoriales
import Helpdesk from './components/Helpdesk'; // Importamos el componente Helpdesk
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';

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
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/create-post" element={<PostForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
