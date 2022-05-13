import React from 'react'

const Search = ({setsearch,setpage}) => {




  return (
    <form className="flex justify-center p-5 space-x-4 mb-4">
        <input 
        className="w-[650px] border-2 border-blue-600 h-12 rounded p-2 px-3 focus:outline-none " 
        placeholder="Search" 
        onChange={(e)=>{setpage(1);setsearch(e.target.value)}}>

        </input>
        <button className="bg-blue-500 text-white font-bold rounded p-2 px-3 hover:bg-blue-800 ">Search</button>
    </form>
  )
}

export default Search