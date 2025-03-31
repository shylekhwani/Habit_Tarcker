import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { HabitContextProvider } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HabitContextProvider>
        <App />
    </HabitContextProvider>
  </BrowserRouter>
)
