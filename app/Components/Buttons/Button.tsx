import React, { FC } from "react";
import Link from "next/link";
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
      <Link href={`${link}`}>
        <button className={ButtonStyle}>
          <span className={NameStyle}>{Name}</span>
          {Icon && <span className={IconStyle}>{Icon}</span>}
        </button>
      </Link>
    </>
  );
};

Button.displayName = "Button";
export default Button;
