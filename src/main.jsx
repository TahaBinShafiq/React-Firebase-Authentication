import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx';
import { AuthProvider } from '../Context/AuthProvider/index.jsx';
import { ThemeProvider } from '../Context/ThemeProvider/index.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>

)
