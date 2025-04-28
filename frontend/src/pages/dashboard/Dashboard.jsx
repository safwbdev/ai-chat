import React from 'react'
import logo from '../../assets/react.svg'

const Dashboard = () => {

    const Option = ({ image, text }) => (
        <div className="flex flex-1 flex-col gap-[10px] text-300 text-[14px] p-[20px] border-1 rounded">
            <img src={image} className='w-[40px] h-[40px] object-fit-cover' alt="" />
            <span>{text}</span>
        </div>
    )

    return (
        <div className='flex flex-col items-center w-full h-full'>
            <div className="flex-1 flex flex-col items-center justify-center w-1/2 gap-[50px]">
                <div className="flex items-center gap-[20px] opacity-[0.2]">
                    <img src={logo} className='w-[64px] h-[64]' alt="" />
                    <h1 className='text-transparent text-[64px] bg-clip-text bg-linear-to-r/srgb from-[#217bfe] to-[#e55571]'>Chat AI</h1>
                </div>
                <div className="w-full flex items-center justify-space-between gap-[50px]">
                    <Option image={logo} text={"Create a new Chat"} />
                    <Option image={logo} text={"Analyze Images"} />
                    <Option image={logo} text={"Review my code"} />
                </div>
            </div>
            <div className="mt-auto">
                <form className='w-full h-full flex justify-space-between items-center gap-[20px] mb-[10px]'>
                    <input type="text" placeholder='Ask me anything!' className='flex-1 p-[20px] background-transparent border-0 outline-none text-[#ececec]' />
                    <button className='bg-[#605e68] rounded border-0 cursor-pointer p-[10px] flex items-center justify-center mr-[20px]'>
                        <img src={logo} className='w-[16px] h-[16px]' alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard