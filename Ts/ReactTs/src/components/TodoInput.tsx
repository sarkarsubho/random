import React, { useState } from "react";

interface ITodoInputProps{
  onClick:(value:string)=>void;
}

export const TodoInput = ({ onClick }:ITodoInputProps) => {
  const [text, setText] = useState<string>("");

  const changeHandeller:React.ChangeEventHandler<HTMLInputElement>= (e) => {
    setText(e.target.value)
  };

  const handleAdd : React.MouseEventHandler<HTMLButtonElement>=()=>{
    
   if(!text.trim()){
    return
   }else{
    onClick(text);
    setText("")
   }
  }

  return (
    <div>
      <input type={"text"} value={text} onChange={changeHandeller} placeholder="Add Todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
