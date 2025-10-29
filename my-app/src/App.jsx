import React, { useState } from 'react';

function App() {
  let [num, setNum] = useState(0);
  let [name, setName] = useState('ahmed');

  // let num = 0;
  // function setNum(val) {
  //   num=val
  // }
  function counter() {
    setNum(++num);
  }

  console.log(num);

  return (
    <div>
      {/* <Header /> */}
      {/* <Button text={'new button'} /> */}
      <div>{num}</div>
      <button onClick={counter}>click me</button>
      <h1>{num}</h1>
      <input
        type='text'
        onChange={(e) => {
          setName(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />

      <h2>{name}</h2>

      {/* create form using module css and add onchnage on both inputs email and password also save input values in localstorage on button click  */}

      {/* commands */}
      {/* npm create vite@latest
      project name
      react and js select
      no

      cd projectname
      npm i =====install node modules
      npm run dev===== run project  */}
    </div>
  );
}

export default App;
