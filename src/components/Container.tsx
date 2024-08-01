import React, { type ElementType } from "react";

type ContainerProps = {
  as: ElementType;
};

const Container: React.FC<ContainerProps> = ({ as }) => {
  const Component = as;
  return <Component />;
};

export default Container;
