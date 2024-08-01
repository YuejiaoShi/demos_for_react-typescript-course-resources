import React,{ComponentPropsWithoutRef}from "react";

interface InputProps {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<''>;

const Input: React.FC<InputProps> = ({ id, label }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} />
    </p>
  );
};

export default Input;
