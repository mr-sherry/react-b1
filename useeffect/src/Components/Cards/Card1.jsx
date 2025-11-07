import React from 'react';
import styles from './Card.module.css';

function Card1({ heading, para, text }) {
  return (
    <div className={styles.card}>
      <h1>{heading}</h1>
      <p>{para}</p>
      <button>{text}</button>
    </div>
  );
}

export default Card1;
