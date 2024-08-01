import React, { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

const Form: React.FC<FormProps> = (props) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
