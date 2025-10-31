import { useState } from 'react';
// import styles from './Form.module.css';

function Form() {
  const [input, setInput] = useState(undefined);
  const [loading, setLoading] = useState(true);

  console.log(input);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  // let [email, setEmail] = useState('a@gmail.com');
  // let [password, setPassword] = useState(12345678);
  // let [data, setData] = useState([]);

  // function saveData(e) {
  //   e.preventDefault();
  //   setData(() => [...data, { email, password }]);

  //   localStorage.setItem('data', JSON.stringify(data));
  //   console.log(data);
  // }

  // function getData() {
  //   let data1 = JSON.parse(localStorage.getItem('data'));
  //   setData(data1);
  //   console.log(data);
  // }

  // 🧩 Task: Login Form with Loading and Conditional Rendering

  // Goal:
  // Build a login form using React that:

  // Has controlled inputs for email and password.

  // Shows a loading message for 2 seconds after clicking “Login”.

  // Then conditionally renders either a “Welcome” message (if credentials are correct) or an “Error” message (if wrong).
  return (
    // <div className={styles.heading}>
    //   Form With LocalStorage
    //   <form action=''>
    //     <input
    //       onChange={(e) => {
    //         setEmail(e.currentTarget.value);
    //       }}
    //       type='email'
    //       name=''
    //       id='input1'
    //     />
    //     <input
    //       onChange={(e) => {
    //         setPassword(e.currentTarget.value);
    //       }}
    //       type='password'
    //       name=''
    //       id='input2'
    //     />
    //     <button onClick={saveData}>Submit</button>
    //   </form>
    //   <button onClick={getData}>get data</button>
    //   <ul>
    //     {data.map((item, index) => (
    //       <>
    //         <div key={index}>
    //           <li>{item.email}</li>
    //           <li>{item.password}</li>
    //         </div>
    //       </>
    //     ))}
    //   </ul>
    // </div>

    <>
      {!loading ? (
        <>
          <form action=''>
            <input
              value={input}
              type='text'
              name=''
              id=''
              onChange={(e) => {
                setInput(e.currentTarget.value);
              }}
            />
            <button>hello</button>
            {/* if (condition) {
          
        }else{

        }
        condition ? code : code condition && code */}
          </form>
          <h1>{input === 'ahmed' ? input : 'invalid name'}</h1>
          <h1>{name}</h1>
        </>
      ) : (
        <h1>Loading........</h1>
      )}
    </>
  );
}

export default Form;
