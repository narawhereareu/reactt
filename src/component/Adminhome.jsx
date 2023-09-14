import React from 'react'
import Navbar from './Navbar'
import Button from './Button'

function Adminhome() {
  return (
    <div>
        <Navbar/>
        <Button/>
        <div className="flex justify-center pt-4 ">
            <form className="flex p-4 gap-4">
                <input type='text' placeholder='name' id='name' className="border-4 outline-solid"/>
                <input type='text' placeholder='last name' id='last name' className="border-4 outline-solid"/>
                <input type='text' placeholder='position' id='postion' className="border-4 outline-solid"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add</button>
            </form>
        </div>
        <div className="flex justify-center items-center pt-6 ">
      <table className="border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-5">Name</th>
            <th className="border border-gray-300 p-5">Last Name</th>
            <th className="border border-gray-300 p-5">Position</th>
            <th className="border border-gray-300 p-5">Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border border-gray-300 p-5"></td>
                <td className="border border-gray-300 p-5"></td>
                <td className="border border-gray-300 p-5"></td>
                <td className="border border-gray-300 p-5"><button>Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Adminhome