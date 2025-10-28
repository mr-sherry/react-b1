import React from 'react';
import Button from './Componenets/Button';
import Header from './Componenets/Header';

function App() {
  return (
    <div>
      <Header />
      <Button text={'send response'} heading={'heading from prop'} />
      <Button text={'new button'} />

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
