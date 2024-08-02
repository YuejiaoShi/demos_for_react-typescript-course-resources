import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} name={id} {...props} ref={ref} />
      </p>
    );
  }
);

export default Input;
