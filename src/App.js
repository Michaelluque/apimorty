import React, { useState, useEffect } from 'react'
import Cards from "../src/Components/Cards/Cards"
import Filters from '../src/Components/Filters/Filters'
import Pagination from '../src/Components/Pagination/Pagination'
import Search from '../src/Components/Search/Search'
import Navbar from './Components/Navbar/Navbar'


function App() {

  const [page, setpage] = useState(1);
   const [datos, setdata] = useState([]);
   const [search, setsearch] = useState("");
const [status,setstatus] = useState("");

console.log(status)



  console.log(search)
  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}`


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setdata(data);
    })()
  }, [api]);

  return (
    <div className=" Container w-full">  
    <div className="w-screen">
      <Navbar/>
      </div>   
      <div className=" bg-white mx-auto max-w-[1500px] w-[1200px]  px-8">
     
      <div>
        <h1 className="text-center font-bold text-4xl ">Characters</h1>
        <Search setsearch={setsearch}  setpage={setpage}/>
        <div className="grid grid-cols-4 p-3 ">
          <div className="p-2">
            <Filters setstatus={setstatus} setpage={setpage} />
          </div>
          <div className="col-span-3 ">
            
            <Cards datos={datos} />
          </div>
        </div >
        <div className='text-center' >
          <Pagination page={page} setpage={setpage} />
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
