import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

const Button: React.FC<ButtonProps | AnchorProps> = (props) => {
  //   const { el, ...otherProps } = props;
  if (props.el === "anchor") return <a></a>;
  return <button {...props}></button>;
};

export default Button;
