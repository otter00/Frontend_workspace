import React from 'react'; 

// export interface ButtonItemProps {
//     children: any;
// }

export interface ButtonProps {
    onClick: React.MouseEventHandler | undefined,
    children: React.ReactNode,
    type?:  "button" | "submit" | "reset" | undefined,
    // className?: string,
}

export default function ButtonComponent({onClick, children, type} : ButtonProps) {
    return (
        <>
        <button 
        type={type}
        onClick={onClick}>{children}</button>
        </>
    )
}