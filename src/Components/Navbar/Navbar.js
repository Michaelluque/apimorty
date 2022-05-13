import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between p-4 px-80 bg-[#F8F9FA] items-center">
            <div className="text-3xl font-bold-sm">Rick & Morty</div>
            <div className="space-x-4 flex items-center ">
                <a className="text-xl text-blue-600 underline underline-offset-4 font-semibold " href="#">Characters</a>
                <a className="text-xl font-normal hover:font-semibold" href="#">Episode</a>
                <a className="text-xl font-normal hover:font-semibold" href="#">Location</a>
            </div>

        </nav>
    )
}

export default Navbar