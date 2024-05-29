import React, { useState } from 'react';
import axios from 'axios';
import './style/chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/chatbot_response/', { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error al obtener la respuesta del chatbot', error);
    }
  };

  return (
    <div className="container">
      <h1>Chatbot</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje"
        />
        <button type="submit">Enviar</button>
      </form>
      <div className="response-container">
        <h2>Respuesta</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chatbot;

