import React, {  } from "react";
interface HeaderProps {
    label? :string;
    children?:JSX.Element;
}
// if more than 1  children?:JSX.Element | JSX.Element[];
export const Header = ({label= "Counter",children}:HeaderProps) => {
  return <div>
    <h1> {label}</h1>
    {children}
    
    </div>;
};
