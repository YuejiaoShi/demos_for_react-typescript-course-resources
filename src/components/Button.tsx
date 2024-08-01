import React, { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & { href: never };

type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

// Type Predicates
function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

const Button: React.FC<ButtonProps | AnchorProps> = (props) => {
  //   const {  ...anchorProps } = props;
  if (isAnchorProp(props)) {
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;
