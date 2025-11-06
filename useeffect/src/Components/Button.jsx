import React, { useEffect, useState } from 'react';

function Button({ text, click }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
        click(count);
      }}
      style={{ padding: '20px', backgroundColor: 'red', color: 'black' }}
    >
      {text}
    </button>
  );
}

export default Button;
