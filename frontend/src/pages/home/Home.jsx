import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex items-center justify-center h-dvh'>
            <Link to="/dashboard" className='border-1 p-2 text-[18px] uppercase rounded font-bold'>Dashboard</Link>
        </div>
    )
}

export default Home