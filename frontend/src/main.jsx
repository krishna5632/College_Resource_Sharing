
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>   
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
