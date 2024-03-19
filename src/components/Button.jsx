import React from "react";

const Button = ({ className, children, ...remainingProps }) => {
  return (
    <button
      {...remainingProps}
      className={"bg-red-600 text-white p-4 rounded my-2 font-bold " + className}
    >
      {children}
    </button>
  );
};

export default Button;
