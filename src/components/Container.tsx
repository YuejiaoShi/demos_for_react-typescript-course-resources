import React, { ReactNode, type ElementType } from "react";

type ContainerProps = {
  element: ElementType;
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ element, children }) => {
  const Component = element;
  return <Component>{children}</Component>;
};

export default Container;
