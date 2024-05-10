import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex px-2 mx-2 shadow-md overflow-x-auto">
      {name.map((item) => (
        <button className="px-4 m-2 bg-gray-200 rounded-lg" key={item}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
