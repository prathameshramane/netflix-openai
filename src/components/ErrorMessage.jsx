import React from "react";
import InvalidIcon from "../assets/icons/InvalidIcon";

const ErrorMessage = ({ className, children, showIcon, ...remainingProps }) => {
  return (
    <p
      className={"text-red-600 font-semibold flex gap-1 " + className}
      {...remainingProps}
    >
      {showIcon && <InvalidIcon />} {children}
    </p>
  );
};

export default ErrorMessage;
