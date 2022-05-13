import React from 'react'

const Filters = ({setstatus,setpage}) => {


  return (
    <div className="flex flex-col items-center space-y-4 fixed">
      <h1 className="text-2xl font-bold">Filters</h1>
      <a onClick={()=>{setstatus(""); setpage(1)}} className="text-[#0d6efd] underline underline-offset-1" href="#">Clear Filters</a>
      
        <button className="border-2 border-blue-500 text-blue-500 font-bold rounded p-2 px-3"  onClick={()=>{setstatus("unknown")}}>unknown</button>
        <button className="border-2 border-blue-500 text-blue-500 font-bold rounded p-2 px-3"  onClick={()=>{setstatus("Dead")}}>Dead</button>
      

      
    </div>
  )
}

export default Filters