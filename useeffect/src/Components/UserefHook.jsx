import React, { useRef } from 'react';

function UserefHook() {
  //   let input = document.getElementById('input123');
  let inputRef = useRef(null);
  let headingRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    headingRef.current.textContent = inputRef.current.value;
  }

  return (
    <div>
      <input ref={inputRef} type='text' name='' id='input123' />
      <h1 ref={headingRef}></h1>
      <button onClick={handleClick}>focus on input</button>
    </div>
  );
}

export default UserefHook;
