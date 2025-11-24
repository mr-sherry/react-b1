import React, { useContext } from 'react';
import CounterContext from '../Context/CountContext';

function Home() {
  const { count, setCount } = useContext(CounterContext);
  function incremnet() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incremnet}>Counter</button>
    </div>
  );
}

export default Home;
