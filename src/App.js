import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  return (
    <Router>
      <Home />
      <Modal />
      <Sidebar />
    </Router>
  )
}

export default App
