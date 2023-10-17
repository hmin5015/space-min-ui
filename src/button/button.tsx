import React from 'react';
import './_button.scss';

export type ButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
}

export const Button = ({
    title,
    className = '',
    onClick = () => {}
}: ButtonProps) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
        >
           <span>{title}</span>
       </button>
    )
}
