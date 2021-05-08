import React, { useState } from "react";

const NewMessage = (props) => {
  // let currentRoom = props.currentRoom;
  // console.log("CURRENTROOM!!!", props.currentRoom);

  let sendMessage = props.sendMessage;
  const [newMsg, setNewMsg] = useState({
    text: "",
    room: props.currentRoom,
    date: new Date(),
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("only once?");
    sendMessage({
      text: newMsg.text,
      room: props.currentRoom,
      date: newMsg.date,
      nick: props.username[0],
    });
    console.log(newMsg.room);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setNewMsg({ ...newMsg, text: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-Msg">New message: </label>
        <input
          type="text"
          onChange={handleChange}
          value={newMsg.text}
          name="new-Msg"
          id="new-Msg"
        />
        <button>Add message</button>
      </form>
    </div>
  );
};

export default NewMessage;
