import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { DarkModeProvider } from '../contexts/DarkMode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </BrowserRouter>,
)
