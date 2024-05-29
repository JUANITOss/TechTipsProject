import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import './style/foro.css';

const Foro = () => {
  return (
    <div className="foro">
      <h1>Foro</h1>
      <Link to="/create-post" className="create-post-link">Crear Nuevo Posteo</Link>
      <PostList />
    </div>
  );
};

export default Foro;