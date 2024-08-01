import React, { ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

const Form: React.FC<FormProps> = (props) => {
  return <form {...props}>{props.children}</form>;
};

export default Form;
