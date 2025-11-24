import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header.jsx';
import { ContextProvider } from './Context/CountContext.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <ContextProvider>
        <Header />
        <App />
      </ContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
