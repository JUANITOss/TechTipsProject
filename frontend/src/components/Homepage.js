import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style/homepage.css';

const Homepage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Making request to the backend');
    axios.get('http://localhost:8000/api/homepage/')
      .then(response => {
        console.log('Response received:', response.data);
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
        <div className="homepage">
          <h1>Bienvenido a nuestra Aplicación</h1>
          <div className="section-links">
          <Link to="./Chatbot" className="section-link">CHATBOT (Próximamente)</Link>
          <Link to="./Foro" className="section-link">FORO (Próximamente)</Link>
          <Link to="./PreguntasFrecuentes" className="section-link">PREGUNTAS FRECUENTES (Próximamente)</Link>
          <Link to="./Tutoriales" className="section-link">TUTORIALES (Próximamente)</Link>
          <Link to="./Helpdesk" className="section-link">HELPDESK (Próximamente)</Link>
          </div>
        </div>
      );
};

export default Homepage;
