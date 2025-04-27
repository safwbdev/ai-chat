import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./dashboardLayout.css";
import { useAuth } from '@clerk/clerk-react';

const DashboardLayout = () => {

    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate()
    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in')
        }
    }, [isLoaded, userId, navigate])

    if (!isLoaded) return <h1>Loading ...</h1>

    return (
        <div className="dashboardLayout">
            <div className="menu">Menu</div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout