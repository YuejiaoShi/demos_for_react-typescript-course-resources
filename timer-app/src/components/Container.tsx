import { ComponentPropsWithoutRef, ReactNode, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  element?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  element,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = element || "div";
  return <Component {...props}>{children}</Component>;
}
