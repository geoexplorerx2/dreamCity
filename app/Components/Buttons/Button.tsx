import React, { FC } from 'react'

interface ButtonProps {
    ButtonStyle?: string;
    Name: string;
    NameStyle?: string;
    Icon?: any;
    IconStyle?: string;
}
const Button: FC<ButtonProps> = (props) => {
    const { ButtonStyle, Name, NameStyle, Icon, IconStyle } = props
    return (
        <button className={ButtonStyle}>
            <span className={NameStyle}>{Name}</span>
            {Icon && <span className={IconStyle}>{Icon}</span>}
        </button>
    )
}

Button.displayName = "Button"
export default Button
