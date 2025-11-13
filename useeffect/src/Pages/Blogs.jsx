import React from 'react';
import Card from '../Components/Cards/Card';
import { Link, useNavigate } from 'react-router-dom';

function Blogs() {
  let nav = useNavigate();
  const blogTitles = [
    'Mastering React Hooks: A Complete Guide',
    'Building Reusable UI Components with Tailwind CSS',
    'Optimizing React Performance in Large Applications',
    'Understanding Dynamic Routing in React Router v6',
    'Top 10 Frontend Design Trends for 2025',
    'How to Manage State Effectively with Zustand',
    'Dark Mode in React: Step-by-Step Implementation',
    'Deploying React Apps with Vercel: Best Practices',
    'Animating Your React UI with Framer Motion',
    'Integrating APIs in React: Fetch, Axios, and Beyond',
  ];

  const handleClick = () => {
    try {
      //   dataFetch;
    } catch (error) {
      error;
    } finally {
      nav('/');
    }
    console.log('clicked');
  };
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {blogTitles.map((title, index) => (
          <Card blogNum={index} title={title} />
        ))}
      </div>
      <Link to={'/'}>
        <button onClick={handleClick}>open home</button>
      </Link>
    </>
  );
}

export default Blogs;
