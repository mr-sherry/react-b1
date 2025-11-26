import React from 'react';

function Child({ onPress }) {
  console.log('Child Rendered'); 
  return <button onClick={onPress}>Click Child Btn</button>;
}

export default React.memo(Child);
