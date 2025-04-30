import React from 'react'
import Markdown from 'react-markdown'

const AIMessage = ({ text }) => (
    <div className='p-[20px]'>
        <Markdown>
            {text}
        </Markdown>
    </div>)

export default AIMessage