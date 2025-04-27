import React from 'react'
import './Dashboard.css'
import logo from '../../assets/react.svg'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="texts">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>Chat AI</h1>
                </div>
                <div className="options">
                    <div className="option">
                        <img src={logo} alt="" />
                        <span>Create a new Chat</span>
                    </div>
                    <div className="option">
                        <img src={logo} alt="" />
                        <span>Analyze Images</span>
                    </div>
                    <div className="option">
                        <img src={logo} alt="" />
                        <span>Review my code</span>
                    </div>
                </div>
            </div>
            <div className="formContainer">
                <form >
                    <input type="text" placeholder='Ask me anything!' />
                    <button>
                        <img src="" alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard