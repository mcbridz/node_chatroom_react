import React from "react";
import "./rooms.css"
import { useState, useEffect } from "react";

const Rooms = (props) => {
  let rooms = props.rooms;
  let setRooms = props.setRooms;
  let currentRoom = props.currentRoom;
  let setCurrentRoom = props.setCurrentRoom;
  const addRoom = () => {
    let newRoom = prompt("Enter name of new room...");
    rooms.push(newRoom);
    // setRooms([...rooms, newRoom]);
    setCurrentRoom(newRoom);
  };
  const handleChange = (event) => {
    setCurrentRoom(event.target.value);
  };
  // {room === currentRoom ? 'selected' : ''}

  return (
    <div id="rooms">
      <button className="addRoomButton" onClick={addRoom}>Add Room</button>
      <label htmlFor="room-select">Change Room:</label>
      <select onChange={handleChange} name="room" id="room-select">
        <option value="">--Select a Room--</option>
        {rooms.map((room, id) => (
          <option value={room} key={id}>
            {room}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Rooms;
