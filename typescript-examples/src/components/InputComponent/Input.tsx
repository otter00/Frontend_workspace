import React from 'react'; 

export interface InputProps extends React.HTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode,
    value: string,
    type?:  "checkbox" | "radio" | "text" | undefined,
}

export default function InputComponent({children, value, type, ...other} : InputProps) {
    return (
        <>
        <label {...other}>{children}
            <input type={type} value={value}></input>
        </label>
        </>
    )
}