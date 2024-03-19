import { Field } from "formik";
import React from "react";

const InputBox = ({ className, ...remainingProps }) => {
  return (
    <Field
      {...remainingProps}
      className={
        "p-4 my-2 bg-opacity-0 bg-black text-white text-lg rounded border-white border-[1px] focus:border-4 " +
        className
      }
    />
  );
};

export default InputBox;
