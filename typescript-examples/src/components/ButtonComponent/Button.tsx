import React from 'react'; 

// export interface ButtonItemProps {
//     children: any;
// }

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>  {
    onClick: React.MouseEventHandler | undefined,
    children: React.ReactNode,
    type?:  "button" | "submit" | "reset" | undefined,
}

export default function ButtonComponent({onClick, children, type, ...other} : ButtonProps) {
    return (
        <>
        <button 
        type={type}
        onClick={onClick}
        {...other}>{children}</button>
        </>
    )
}