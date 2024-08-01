import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  type ElementType,
} from "react";

type ContainerProps<T extends ElementType> = {
  element: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container: React.FC<ContainerProps> = ({ element, children }) => {
  const Component = element;
  return <Component>{children}</Component>;
};

export default Container;
