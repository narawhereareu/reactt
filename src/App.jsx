import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Button from './component/Button'

function App() {
  const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
    },
  ]
  const [employer, setEmploy] = useState()
  const[sector,setSector] = useState()
  const data = { mockEmployees}
  return (
    <div className="max-[1640px]:">
    <Navbar/>
    <main className="shadow-cyan-500/50 pt-10"> 
      <h1 className="text-5xl font-bold underline text-center flex flex-col">
      Generation Thialand
      React-Assesment
    </h1>
    <div className="pt-6">
      <Button/>
    </div>
    </main>
    </div>
  )
}

export default App
