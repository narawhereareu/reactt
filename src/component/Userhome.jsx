import React from 'react'
import Navbar from './Navbar'
import Button from './Button'

function Userhome() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="text-center text-5xl p-6">
            <h1 className="font-bold">Home user Sector</h1>
        </div>
        <div>
            <Button/>
        </div>
        <div className="flex justify-center items-center pt-6">
      <table className="border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-5">Name</th>
            <th className="border border-gray-300 p-5">Last Name</th>
            <th className="border border-gray-300 p-5">Position</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border border-gray-300 p-5"></td>
                <td className="border border-gray-300 p-5"></td>
                <td className="border border-gray-300 p-5"></td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Userhome