import React from 'react'
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

const Message = ({ isUser = false, text }) => {
    return isUser ? (<UserMessage text={text} />) : (<AIMessage text={text} />)
}

export default Message