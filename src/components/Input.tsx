import React, { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input: React.FC<InputProps> = ({ id, label, ...props }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </p>
  );
};

export default Input;
