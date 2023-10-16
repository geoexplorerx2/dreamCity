import React, { FC } from "react";

interface ButtonProps {
  ButtonStyle?: string;
  Name: string;
  NameStyle?: string;
  Icon?: any;
  IconStyle?: string;
  link?: any;
}

const Button: FC<ButtonProps> = (props) => {
  const { ButtonStyle, Name, NameStyle, Icon, IconStyle, link } = props;
  return (
    <>
      <a href={`${link}`} target="_blank" rel="noopener noreferrer">
        <button className={ButtonStyle}>
          <span className={NameStyle}>{Name}</span>
          {Icon && <span className={IconStyle}>{Icon}</span>}
        </button>
      </a>
    </>
  );
};

Button.displayName = "Button";
export default Button;
