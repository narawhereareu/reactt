import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 mb-4">
        <ul className="flex flex-row justify-end items-center gap-4 text-xl font-bold">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/owner'}>Owner</Link></li>
        </ul>
    </div>
  )
}

export default Navbar