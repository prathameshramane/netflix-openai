import React from "react";
import InvalidIcon from "../assets/icons/InvalidIcon";

const ErrorMessage = ({ className, children, ...remainingProps }) => {
  return (
    <p
      className={"text-red-600 font-semibold flex gap-1 " + className}
      {...remainingProps}
    >
      <InvalidIcon /> {children}
    </p>
  );
};

export default ErrorMessage;
