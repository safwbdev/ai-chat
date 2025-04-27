import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <Link to="/dashboard" className='link'>Dashboard</Link>
        </div>
    )
}

export default Home