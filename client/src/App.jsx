// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PostsList from '../features/posts/PostsList.jsx'; 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <h1>React on Rails App</h1>
      <p>You can find  this file in client/src/App.jsx</p>
      <PostsList />
    </div>
    </>
  )
}

export default App
