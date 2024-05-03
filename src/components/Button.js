import React from "react";

const Button = ({ name }) => {
  return (
    <div className="px-2 mx-2 snap-x ">
      {name.map((item) => (
        <button
          className="px-4 m-2 bg-gray-200 rounded-lg snap-start"
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
