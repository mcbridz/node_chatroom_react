import './App.css';
import React, { useState, useEffect } from 'react'
import ChatBox from "./ChatBox"
// const io = require('./node_modules/socket.io/client-dist/socket.io.js')
import io from "../../node_modules/socket.io/client-dist/socket.io.js"
const socket = io()


const getRooms = (messages) => {
  const rooms = messages.map(msg => msg.room)
  const filtered = rooms.filter(room => room)
  return Array.from(new Set(filtered))
}

function App() {
  const [messages, setMessages] = useState([])
  const [rooms, setRooms] = useState([])
  socket.on("initial messages", (newMessages) => {
    // console.log("initial messages received")
    setRooms(getRooms(newMessages))
    setMessages(newMessages)
    console.log(rooms)
  })
  // console.log(messages)
  return (
    <div className="App">
      <ChatBox data={messages} rooms={rooms} setRooms={setRooms} />
      <input placeholder="New Chat Message" />
    </div>
  )
}

export default App;
