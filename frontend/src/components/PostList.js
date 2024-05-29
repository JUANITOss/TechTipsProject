// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style/foro.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('http://localhost:8000/api/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/posts/${id}/delete/`)
      .then(() => {
        fetchPosts(); // Actualiza la lista de posteos después de eliminar
      })
      .catch(error => {
        console.error('There was an error deleting the post!', error);
      });
  };
  
  return (
    <div className="post-list">
      <input 
        type="text"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredPosts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Likes: {post.likes} Dislikes: {post.dislikes}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <Link to={`/posts/${post.id}`}>Ver más</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
