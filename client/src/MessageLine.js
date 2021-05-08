import React from 'react'
import './MessageLine.css'
const MessageLine = (props) => {
    let message = props.data
    // console.log('rendering message line')
    return (
        <li className="message-item" >
            <div>
                <span className="date">{(new Date(message.date)).toLocaleString()} </span>
                <span className="nick">{message.nick}:</span>
            </div>
            <div>
                <span className="text">{message.text}</span>
            </div>
        </li>
    )
}

export default MessageLine
