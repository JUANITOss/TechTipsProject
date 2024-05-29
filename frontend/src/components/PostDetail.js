// src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './style/foro.css';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  const handleLike = () => {
    axios.patch(`http://localhost:8000/api/posts/${id}/`, { likes: post.likes + 1 })
      .then(response => setPost(response.data))
      .catch(error => console.error('Error liking post:', error));
  };

  const handleDislike = () => {
    axios.patch(`http://localhost:8000/api/posts/${id}/`, { dislikes: post.dislikes + 1 })
      .then(response => setPost(response.data))
      .catch(error => console.error('Error disliking post:', error));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/posts/${id}/delete/`)
      .then(() => {
        navigate('/foro');
      })
      .catch(error => {
        console.error('There was an error deleting the post!', error);
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Likes: {post.likes} Dislikes: {post.dislikes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <button onClick={handleDelete}>Delete Post</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default PostDetail;