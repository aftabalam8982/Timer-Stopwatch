import React from "react";

const Button = ({ disable, text = "Button", handleClick }) => {
  return (
    <div>
      <button
        disabled={disable}
        onClick={handleClick}
        className={`${
          disable
            ? "  py-2 px-4 rounded-3xl text-white cursor-pointer font-bol bg-yellow-600 shadow-lg"
            : " bg-yellow-700 py-2 px-4 rounded-3xl text-white cursor-pointer font-bold hover:bg-yellow-600 shadow-lg active:translate-y-0.5"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
