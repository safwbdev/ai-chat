import React, { useRef } from 'react'
import { IKContext, IKUpload } from 'imagekitio-react';

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_ENDPOINT;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const authenticator = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/upload');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload = ({ setImg }) => {
    const ikUploadRef = useRef(null);

    const onError = err => {
        console.log("Error", err);
    };

    const onSuccess = res => {
        console.log("Success", res);
        setImg(prev => ({ ...prev, isLoading: false, dbData: res }))
    };

    const onUploadProgress = progress => {
        console.log("Progress", progress);
    };

    const onUploadStart = evt => {
        console.log("Start", evt);
        setImg(prev => ({ ...prev, isLoading: true }))
    };
    return (
        <div className="App">
            <IKContext
                urlEndpoint={urlEndpoint}
                publicKey={publicKey}
                authenticator={authenticator}
            >
                <IKUpload
                    fileName="test-upload.png"
                    onError={onError}
                    onSuccess={onSuccess}
                    useUniqueFileName={true}
                    onUploadProgress={onUploadProgress}
                    onUploadStart={onUploadStart}
                    style={{ display: "none" }}
                    ref={ikUploadRef}
                />
                <label onClick={() => ikUploadRef.current.click()}>
                    <img src="/attachment.png" className='border-1 h-[15px] w-[15px] cursor-pointer' alt="" />
                </label>
            </IKContext>
        </div>
    );
}

export default Upload;