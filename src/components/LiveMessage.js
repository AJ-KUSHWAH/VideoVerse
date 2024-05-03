import React from "react";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex m-2 ">
      <img
        className="h-5"
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      ></img>
      <span className="">{name}</span>
      <span className="ml-4">{message}</span>
    </div>
  );
};

export default LiveMessage;
