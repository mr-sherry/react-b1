import { useState, useCallback, useId } from 'react';
import Child from './Child';

export default function Parent() {
  let id = useId();
  let id1 = useId();
  const [count, setCount] = useState(0);

  const onPress = useCallback(() => {
    console.log('Button clicked in child');
  }, []);

  console.log(id);
  console.log(id1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <label htmlFor={id}>input</label>
      <input type='text' name='' id={id} />
      <label htmlFor={id1}>input</label>
      <input type='text' name='' id={id1} />

      <Child onPress={onPress} />
    </div>
  );
}
