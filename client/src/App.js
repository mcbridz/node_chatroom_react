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

  //SET ALL 'SETUP' LISTENERS/CALLS INSIDE OF USEEFFECT
  //APP() IS INITIALIZED FOR RE-RENDERS, MULTIPLYING LISTENERS
  useEffect(() => {
    socket.on("chat message", (msg) => {
      console.log("message received");
      let messageArr = messages;
      setMessages([...messageArr, msg]);
    })
    socket.on("initial messages", (newMessages) => {
      setRooms(getRooms(newMessages));
      setMessages(newMessages);
    });
  }, []);


  return (
    <div className="App">
      <Name username={username} setUsername={setUsername} />
      <ChatBox
        data={messages}
        rooms={rooms}
        setRooms={setRooms}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />
      <NewMessage
        username={username}
        currentRoom={currentRoom}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;
