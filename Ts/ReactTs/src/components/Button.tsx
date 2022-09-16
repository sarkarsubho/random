import React from "react";
interface ButtonProps{
    label:string,
    handleClick:()=>void
}
export const Button = (props :ButtonProps) => {
 const {label,handleClick}=props
  return <button onClick={handleClick}>{label}</button>;
};
