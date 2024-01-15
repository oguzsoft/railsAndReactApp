// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../components/NavBar.jsx';
import AppRoutes from '../components/AppRoutes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>React on Rails App</h1>
        <p>You can find  this file in client/src/App.jsx</p>
        <NavBar></NavBar>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
