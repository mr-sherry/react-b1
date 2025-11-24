import React, { useContext } from 'react';
import CounterContext from '../Context/CountContext';
import ThemeContext from '../Context/ThemeContext';

function User() {
  const { count } = useContext(CounterContext);
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      hello from user
      <h1>{count}</h1>
      <h1>{theme}</h1>
      <button onClick={ToggleTheme}>theme chnage</button>
    </div>
  );
}

export default User;
