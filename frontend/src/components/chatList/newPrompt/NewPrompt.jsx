import React, { useEffect, useRef, useState } from 'react'
import Upload from '../../upload/Upload';
import logo from '../../../assets/react.svg'
import { IKImage } from "imagekitio-react";

const NewPrompt = () => {

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {}
    })

    const endRef = useRef();

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    }, []);

    return (
        <>
            {img.isLoading && <div className="">Loading...</div>}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    width={380} />
            )}
            <div className="pb-[100px]" ref={endRef}></div>
            <form className="w-full position-absolute b-0 bg-[#2c2937] rounded flex items-center gap-[20px] py-0 px-[20px]">
                <Upload setImg={setImg} />
                <input type="file" name="file" id="file" multiple={false} hidden />
                <input type="text" placeholder="Ask anything" className='flex-1 p-[20px] border-0 outline-none bg-transparent text-[#ececec]' />
                <button className='rounded bg-[#605e68] border-0 p-[10px] flex items-center justify-center cursor-pointer'>
                    <img className='w-[16px] h-[16px] ' src={logo} alt="test" />
                </button>
            </form>
        </>
    )
}

export default NewPrompt