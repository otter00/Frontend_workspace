import React from 'react'; 

export interface InputProps {
    value: string,
    type?:  "checkbox" | "radio" | "text" | undefined,
    // className?: string,
}

export default function InputComponent({value, type} : InputProps) {
    return (
        <>
        <input type={type} value={value}></input>
        </>
    )
}