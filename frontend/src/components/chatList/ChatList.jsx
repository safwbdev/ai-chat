import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/react.svg'
import { CHAT } from '../../routes'
import { useQuery } from '@tanstack/react-query'

const ChatList = () => {

    const { isPending, data, error } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/userchats`, {
            credentials: "include"
        }).then((res) => res.json()),
    })

    const Break = () => (<hr className='border-0 h-[2px] border-white opacity-[0.1] rounded my-[20px]' />)

    const Title = ({ children }) => (<span className="text-bold text-[10px] mb-[10px]">{children}</span>)

    const Item = ({ to, children }) => (
        <Link to={to} className='p-[10px] rounded text-white text-decoration-unset'>{children}</Link>
    )
    return (
        <div className='flex flex-col h-full'>
            <Title>Dashboard</Title>
            <Item to={'/dashboard'}>Create a new Chat</Item>
            <Item to={'/'}>About us</Item>
            <Item to={'/'}>Contact us</Item>
            <Break />
            <Title>Recent Chats</Title>
            <div className="flex flex-col overflow-y-scroll">
                {isPending ? "Loading..." : error ? "There was an error" : data.map((num) => (<Item to={`${CHAT}/${num._id}`} key={num._id}>{num.title}</Item>))}
            </div>
            <Break />
            <div className="mt-auto flex items-center gap-[10px] text-[12px]">
                <img src={logo} className='h-[24px] w-[24px]' alt="" />
                <div className="flex flex-col font-bold">
                    <span>Upgrade to Pro</span>
                    <span>Get unlimited access to extra features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList