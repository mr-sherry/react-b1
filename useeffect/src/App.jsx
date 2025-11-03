import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState();
  const [colors, setColors] = useState('red');
  function count() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    let array = ['black', 'blue', 'green', 'yellow'];
    const interval = setInterval(() => {
      console.log('interval running');
      let randomNum = (Math.random() * array.length).toFixed();
      console.log(randomNum);
      setColors(array[randomNum]);
    }, 1000);

    const timeout = setTimeout(() => {
      console.log('cleaning after 10s');
      clearInterval(interval);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  //chnage this color chnager to make colors slide left to right on by one after every one second

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [])

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          border: '2px solid black',
          backgroundColor: colors,
        }}
      ></div>
      <button onClick={count}>hello {counter}</button>
    </div>
  );
}

export default App;
