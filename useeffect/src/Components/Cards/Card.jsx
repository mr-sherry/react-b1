import React, { Children } from 'react';
import styles from './Card.module.css';

function Card({ children, title }) {
  return (
    <div className={styles.card}>
      <img
        src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000'
        alt=''
        width={300}
      />
      {children}
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
