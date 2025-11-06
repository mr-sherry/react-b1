import { useState } from 'react';
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>btn clicked times:{count}</h1>
      hello
      <Button text={'submit'} click={setCount} />
      add input in button component and show input value in app page as h1 by
      lifting value up from button component to app
    </div>
  );
}

export default App;
