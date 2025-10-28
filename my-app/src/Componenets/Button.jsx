function Button({ text,heading }) {
  let value = 'jajaja';
  function save() {
    localStorage.setItem('input value', value);
    return '';
  }

  return (
    <>
      <label htmlFor=''>{heading}</label>
      <input type='text' />
      <button onClick={save}>{text}</button>
    </>
  );
}

export default Button;
