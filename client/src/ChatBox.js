import MessageLine from "./MessageLine";
import React, { useState, useEffect } from "react";
import Rooms from "./Rooms";
// function getRooms(messages, currentRoom) {
//     const rooms = messages.map(msg => msg.room)
//     rooms.push(currentRoom) // we have to add the currentRoom to the list, otherwise it won't be an option if there isn't already a message with that room
//     const filtered = rooms.filter(room => room) // filter out undefined or empty string
//     return Array.from(new Set(filtered)) // filters out the duplicates
// }
const ChatBox = (props) => {
  let messages = props.data;
  let rooms = props.rooms;
  let currentRoom = props.currentRoom;
  let setCurrentRoom = props.setCurrentRoom;
  // console.log('rendering chatbox')
  // console.log(messages)
  const message_container_style = {
    display: "flex",
    flexDirection: "column"
  }
  return (
    <div>
      <div>
        <Rooms
          rooms={rooms}
          setRooms={props.setRooms}
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
      <ul className="message-container" style={message_container_style} id="messages">
        {messages
          .filter((msg) => msg.room === currentRoom)
          .map((msg, id) => (
            <MessageLine className="message-line" data={msg} key={id} />
          ))}
      </ul>
    </div>
  );
};

export default ChatBox;
