import React from 'react'
import './MessageLine.css'
const MessageLine = (props) => {
    let message = props.data
    // console.log('rendering message line')
    return (
        <div className="message-item" >
            <div>
                <span className="nick">{message.nick}:</span>
                <span className="date">{(new Date(message.date)).toLocaleString()} </span>
            </div>
            <div className="text">
                <span >{message.text}</span>
            </div>
        </div>
    )
}

export default MessageLine
