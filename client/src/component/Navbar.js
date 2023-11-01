import React from 'react'

export default function Navbar() {
  return (
    <div className="mx-auto px-32 mt-10">
        <div className="flex justify-between items-center"> 
        <img className="w-24 h-auto" src="/image/Lumiqlogo.png" alt="logo" /> 
        <p className="text-left">
            <div className="text-left">
            <p className="text-left"> Lumiq</p> 
            </div>
            9th Floor, TOWER-A, Noida One, 901, Sector 62 <br />
            Noida, Uttar Pradesh 201301
        </p>
        </div>
    </div>
  )
}
