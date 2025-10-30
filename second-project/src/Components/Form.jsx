import React, { useState } from 'react';
import styles from './Form.module.css';

function Form() {
  let [email, setEmail] = useState('a@gmail.com');
  let [password, setPassword] = useState(12345678);
  let [data, setData] = useState([]);

  function saveData(e) {
    e.preventDefault();
    setData(() => [...data, { email, password }]);

    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
  }

  function getData() {
    let data1 = JSON.parse(localStorage.getItem('data'));
    setData(data1);
    console.log(data);
  }

  // create color state and save color from input in state using onchnage then show that color in div box down on button click as bg of box

  return (
    <div className={styles.heading}>
      Form With LocalStorage
      <form action=''>
        <input
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          type='email'
          name=''
          id='input1'
        />
        <input
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          type='password'
          name=''
          id='input2'
        />
        <button onClick={saveData}>Submit</button>
      </form>
      <button onClick={getData}>get data</button>
      <ul>
        {data.map((item, index) => (
          <>
            <div key={index}>
              <li>{item.email}</li>
              <li>{item.password}</li>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Form;
