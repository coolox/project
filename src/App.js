import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Productpage />} />
      </Routes>
    </div>
  )
}

export default App
