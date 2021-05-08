import React, { useEffect } from "react";

const Name = (props) => {
  const getName = () => {
    if (props.username.length === 0) {
      let newName = prompt("Enter your username: ");
      props.setUsername([newName]);
    }
  };

  useEffect(() => {
    getName();
    console.log("useEffect");
  }, []);

  return <h2>Welcome, {props.username.map((username) => username)}!</h2>;
};

export default Name;
