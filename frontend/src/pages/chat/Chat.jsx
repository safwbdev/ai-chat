import React from 'react'
import NewPrompt from '../../components/chatList/newPrompt/NewPrompt'
import Message from '../../components/messageComponents'
import { useQuery } from '@tanstack/react-query'
import { IKImage } from "imagekitio-react";
import { useLocation } from 'react-router-dom'

const Chat = () => {
    const path = useLocation().pathname;
    const cid = path.split("/").pop()
    const { isPending, data, error } = useQuery({
        queryKey: ['chat', cid],
        queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/chats/${cid}`, {
            credentials: "include"
        }).then((res) => res.json()),
    })

    return (
        <div className='h-full flex w-full flex-col items-center relative'>
            <div className='flex flex-1 w-full justify-center overflow-y-scroll'>
                <div className='w-1/2 flex flex-col gap-[20px]'>
                    {isPending
                        ? "Loading..."
                        : error
                            ? "Something went wrong!"
                            : data?.history?.map((message, i) => (
                                <>
                                    {message.img && (
                                        <IKImage
                                            urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
                                            path={message.img}
                                            height="300"
                                            width="400"
                                            transformation={[{ height: 300, width: 400 }]}
                                            loading="lazy"
                                            lqip={{ active: true, quality: 20 }}
                                        />
                                    )}
                                    <Message isUser={message.role === "user"} text={message.parts[0].text} />
                                </>
                            ))}
                    {data && <NewPrompt data={data} />}
                </div >
            </div>
        </div>
    )
}

export default Chat