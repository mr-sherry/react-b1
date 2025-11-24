import React, { useContext } from 'react';
import CounterContext from '../Context/CountContext';

export default function Dashboard() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1>{count}</h1>
      hello from Dashboard
    </div>
  );
}
