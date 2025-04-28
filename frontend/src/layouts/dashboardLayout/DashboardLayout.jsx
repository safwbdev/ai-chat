import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react';
import ChatList from '../../components/chatList/ChatList';

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
        <div className="flex gap-[50px] h-full">
            <div className="flex-1 m-[1em]">
                <ChatList />
            </div>
            <div className="flex-4 flex justify-center items-center bg-[#12101b]">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout