import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user' element={<User />} />
      </Routes>
      {/* create some contexts with functions and states for practice and use them in diffrent components */}
    </div>
  );
}

export default App;
