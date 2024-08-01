import React, { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form: React.FC<FormProps> = (props) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    props.onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
