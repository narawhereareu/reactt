import React from 'react'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className="justify-center flex gap-4 m-4">
    <button className="rounded-full bg-blue-500 p-5 font-bold outline hover:bg-sky-700 "><Link to={'/userhome'}>User Home sector</Link></button>
    
    <button className="rounded-full bg-blue-500 p-5 font-bold"><Link to={'/adminhome'}>AdminHome sector</Link></button>
    </div>
  )
}

export default Button