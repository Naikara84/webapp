import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profile from './assets/Hakari.jpeg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='profile'>
          <img src={profile} className="logo react" alt="React logo" />
      
      </div>
      <h1>NAIKARA TIMOTHY</h1>
      <div className="card">
      <h1>click below</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Give me your monies 
        </p>
      </div>
      <p className="read-the-docs">
        I was testing this github pages free hosting haha :D
      </p>
    </>
  )
}

export default App
