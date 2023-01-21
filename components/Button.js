import React from "react";

const MyButton = ({ href, text }) => {
  const handleClick = () => {
    window.location.href = href;
  }
  return (
    <button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out transform hover:scale-110 text-xl" onClick={handleClick}>
      {text}
    </button>
  );
};

export default MyButton;
