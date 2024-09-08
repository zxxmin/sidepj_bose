import { createRoot } from 'react-dom/client'
import { Routes, Route } from "react-router-dom"
import Main from './pages/Main'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
)
