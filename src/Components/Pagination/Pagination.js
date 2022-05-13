import React from 'react'

const Pagination = ({page, setpage}) => {


const next = () => {
  setpage((x) => x+1);
}

const prev = () => {
  if (page===1) return;
  setpage((x) => x-1);
} 



  return (
    <div className="space-x-4">
       <button onClick={prev} className="bg-blue-500 text-white p-2 rounded">Prev</button>
      <button onClick={next} className="bg-blue-500 text-white p-2 rounded">Next</button>
     
    </div>
  )
}

export default Pagination