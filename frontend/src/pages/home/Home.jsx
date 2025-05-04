import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    // const test = async () => {
    //     await fetch("http://localhost:3000/api/test", {
    //         credentials: "include"
    //     })
    // }
    return (
        <div className='flex items-center justify-center h-dvh'>
            <Link to="/dashboard" className='border-1 p-2 text-[18px] uppercase rounded font-bold'>Dashboard</Link>
            {/* <button onClick={test}>TEST BACKEND</button> */}
        </div>
    )
}

export default Home