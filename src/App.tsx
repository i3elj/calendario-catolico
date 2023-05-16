import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Obrigado from './pages/obrigado'

import './App.css'

export default function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/calendario-catolico/'}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/obrigado' element={<Obrigado />} />
      </Routes>
    </BrowserRouter>
  )
}
