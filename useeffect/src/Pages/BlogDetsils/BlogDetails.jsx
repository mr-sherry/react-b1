import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  let params = useParams();
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

  console.log();

  return (
    <div>
      {blogTitles[params.blogId]} <h1>{params.blogId}</h1>
    </div>
  );
}

export default BlogDetails;
