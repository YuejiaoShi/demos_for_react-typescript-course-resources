import React,{ComponentPropsWithoutRef}from "react";

interface InputProps {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<''>;

const Input: React.FC<InputProps> = ({ id, label,...props }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props}/>
    </p>
  );
};

export default Input;
