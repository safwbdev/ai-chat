import React from 'react'
import NewPrompt from '../../components/chatList/newPrompt/NewPrompt'
import { UserMessage, AIMessage } from '../../components/messageComponents'

const Chat = () => {
    return (
        <div className='h-full flex w-full flex-col items-center relative'>
            <div className='flex flex-1 w-full justify-center overflow-y-scroll'>
                <div className='w-1/2 flex flex-col gap-[20px]'>
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <NewPrompt />
                </div>
            </div>
        </div>
    )
}

export default Chat