import React from 'react'
import './ChatList.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/react.svg'

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className="title">Dashboard</span>
            <Link to={'/dashboard'}>Create a new Chat</Link>
            <Link to={'/'}>About us</Link>
            <Link to={'/'}>Contact us</Link>
            <hr />
            <span className="title">Recent Chats</span>
            <div className="list">
                <Link to={'/'}>Chat 1</Link>
                <Link to={'/'}>Chat 2</Link>
                <Link to={'/'}>Chat 3</Link>
                <Link to={'/'}>Chat 4</Link>
                <Link to={'/'}>Chat 5</Link>
                <Link to={'/'}>Chat 6</Link>
            </div>
            <hr />
            <div className="upgrade">
                <img src={logo} alt="" />
                <div className="texts">
                    <span>Upgrade to Pro</span>
                    <span>Get unlimited access to extra features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList