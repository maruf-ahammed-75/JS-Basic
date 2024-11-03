import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/jokes')
    .then((Response)=>{
      setJokes(Response.data)
    })
    .catch((error)=>{
      console.log('Error');
    })
  })

  return (
    <>
     <h1>Maruf backend and frontend</h1>
     <p>jokes; {jokes.length}</p>

     {
        jokes.map((joke,index) => {
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
     }
    </>
  )
}

export default App
