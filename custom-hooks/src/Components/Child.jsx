import React from 'react';

function Child({ handleclick }) {
  console.log('child running');

  return <button onClick={handleclick}>hello2</button>;
}

export default React.memo(Child);
