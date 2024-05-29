import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/chatbot-response/', { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error al obtener la respuesta del chatbot', error);
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje"
        />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Respuesta del chatbot:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chatbot;
