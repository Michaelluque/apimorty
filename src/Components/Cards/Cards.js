import React from 'react'

const Cards = ({ datos }) => {
       
    return (

        <div className="grid grid-cols-3">  
        {datos.results?.length > 0 ? (
            datos.results?.map((cartilla, id) => {
                return (
                    <div key={id} className=" w-[250px] border-2 border-[#0d6efd] rounded-xl mb-4 relative">
                        <img className="rounded-t-xl" src={cartilla.image} alt={cartilla}></img>
                        <div className="p-2">
                            <div className="font-bold text-xl mb-6">{cartilla.name}</div>
                            <p>Last Location:</p>
                            <p className="text-lg">{cartilla.location.name}</p>
                            {(() => {

                                if (cartilla.status === "unknown") {
                                    return (<div className="absolute top-3 right-2 text-lg text-white font-semibold px-1 bg-red-500 rounded-lg">{cartilla.status} </div>)
                                }
                                else if (cartilla.status === "Dead") {
                                    return (<div className="absolute top-3 right-2 text-lg text-white font-semibold px-1 bg-green-500 rounded-lg">{cartilla.status} </div>)
                                }
                                else {
                                    return (<div className="absolute top-3 right-2 text-lg text-white font-semibold px-1 bg-gray-500 rounded-lg">{cartilla.status} </div>)
                                }
                            })()}
                        </div>
                    </div>
                )
            })
        ) :
            (<> No Hay productos</>)
        }
        </div>
    )
}

export default Cards