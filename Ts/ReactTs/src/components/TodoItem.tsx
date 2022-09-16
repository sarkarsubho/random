import React from "react";
import { ITodoItemsProps } from "./Todos";


export const TodoItem = ({id,title,status}:ITodoItemsProps) => {
  return <div>
    <h4>{`${id}. ${title}--${status}`}</h4>
  </div>;
};
