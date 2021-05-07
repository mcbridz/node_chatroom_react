import React from 'react'

const MessageLine = (props) => {
    let message = props.data
    // console.log('rendering message line')
    return (
        <li className="message-item">
            <span className="date">{(new Date(message.date)).toLocaleString()}</span>
            <span className="nick">{message.nick}:</span>
            <span className="text">{message.text}</span>
        </li>
    )
}

export default MessageLine
