import React from 'react'
import NewPrompt from '../../components/chatList/newPrompt/NewPrompt'

const Chat = () => {
    const UserMessage = ({ text }) => (<div className='p-[20px] bg-[#2c2937] rounded max-w-[80%] self-end'>{text}</div>)

    const AIMessage = ({ text }) => (<div className='p-[20px]'>{text}</div>)



    return (
        <div className='h-full flex w-full flex-col items-center relative'>
            <div className='flex flex-1 w-full justify-center overflow-y-scroll'>
                <div className='w-1/2 flex flex-col gap-[20px]'>
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <AIMessage text={'Hello from A.I.'} />
                    <UserMessage text={'Hi from Humans'} />
                    <NewPrompt />
                </div>
            </div>
        </div>
    )
}

export default Chat