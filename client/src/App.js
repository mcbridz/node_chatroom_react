import "./App.css";
import React, { useState, useEffect } from "react";
import ChatBox from "./ChatBox";
import Name from "./Name";
import { io } from "socket.io-client";
import NewMessage from "./NewMessage";
const socket = io();

const getRooms = (messages) => {
  const rooms = messages.map((msg) => msg.room);
  const filtered = rooms.filter((room) => room);
  return Array.from(new Set(filtered));
};

const sendMessage = (message) => {
  socket.emit("chat message", message);
};
function App() {
  const [currentRoom, setCurrentRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [username, setUsername] = useState([]);
  const [page, setPage] = useState(1);
  const [numMessages, setNumMessages] = useState(2)

  //SET ALL 'SETUP' LISTENERS/CALLS INSIDE OF USEEFFECT
  //APP() IS INITIALIZED FOR RE-RENDERS, MULTIPLYING LISTENERS
  const getMessages = (room, page, numMessages) => {
    let obj = {
      room: room,
      page: page,
      numMessages: numMessages
    }
    console.log(obj)
    socket.emit('room messages', obj)
  }
  useEffect(() => {
    socket.on('room messages', (messages) => {
      setMessages(JSON.parse(messages))
    })
    socket.on("initial messages", (messages) => {
      console.log("initial messages")
      console.log(messages)
      setRooms(getRooms(messages))
    })
  }, [])


  return (
    <div className="App">
      <Name username={username} setUsername={setUsername} />
      <ChatBox
        data={messages}
        rooms={rooms}
        setRooms={setRooms}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
        page={page}
        setPage={setPage}
        getMessages={getMessages}
        numMessages={numMessages}
      />
      {(currentRoom) ? <NewMessage
        username={username}
        currentRoom={currentRoom}
        sendMessage={sendMessage}
      /> : ''}
    </div>
  );
}

export default App;
