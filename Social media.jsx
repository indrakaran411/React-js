import React, { useState } from 'react';

const SocialMediaDashboard = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts from an API
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to render the list of posts
  const renderPosts = () => {
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Social Media Dashboard</h1>
      <button onClick={fetchPosts}>Load Posts</button>
      {posts.length > 0 ? renderPosts() : <p>No posts to display</p>}
    </div>
  );
};

export default SocialMediaDashboard;
