import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  image: { src: string; alt: string };
}

const Header: React.FC<HeaderProps> = ({ children, image }) => {
  return (
    <div>
      {children}
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Header;
