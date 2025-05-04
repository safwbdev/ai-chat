import React, { useEffect, useRef, useState } from 'react'
import Upload from '../../upload/Upload';
import { IKImage } from "imagekitio-react";
import { GoogleGenAI } from '@google/genai';
import Message from '../../messageComponents';
import { IoMdSend } from "react-icons/io";

const NewPrompt = () => {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {},
    })

    const safetySettings = [
        {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_LOW_AND_ABOVE",
        },
        {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_LOW_AND_ABOVE",
        },
    ];

    const endRef = useRef();

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    }, [question, answer, img]);

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_PUBLIC_KEY });



    const add = async (text) => {
        setQuestion(text);

        const query = Object.entries(img.aiData).length ? [img.aiData, text] : [text];

        console.log(query);

        try {
            const response = await ai.models.generateContentStream({
                model: "gemini-2.0-flash",
                contents: query,
                config: {
                    safetySettings: safetySettings,
                },
            });

            setImg({
                isLoading: false,
                error: "",
                dbData: {},
                aiData: {},
            });

            let text = "";

            for await (const chunk of response) {
                text += chunk.text;
                setAnswer(text)
            }

        } catch (err) {
            console.log(err.message);
            setAnswer(err.message)

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;
        add(text)
        setAnswer("Wating response...")
    }

    return (
        <>
            {img.isLoading && <div className="">Loading...</div>}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    width={380} />
            )}
            {question && <Message isUser={true} text={question} />}
            {answer && <Message text={answer} />}
            <div className="pb-[100px]" ref={endRef}></div>
            <form
                onSubmit={handleSubmit}
                className="w-full position-absolute b-0 bg-[#2c2937] rounded flex items-center gap-[20px] py-0 px-[20px]">
                <Upload setImg={setImg} />
                <input
                    type="file"
                    name="file"
                    id="file"
                    multiple={false}
                    hidden />
                <input
                    type="text"
                    name='text'
                    placeholder="Ask anything"
                    className='flex-1 p-[20px] border-0 outline-none bg-transparent text-[#ececec]' />
                <button className='rounded bg-[#605e68] border-0 p-[10px] flex items-center justify-center cursor-pointer'>
                    <IoMdSend />
                </button>
            </form>
        </>
    )
}

export default NewPrompt