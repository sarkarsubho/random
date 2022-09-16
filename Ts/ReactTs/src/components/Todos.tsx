import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export interface ITodoItemsProps {
  id: number;
  title: string;
  status: boolean;
}
export const Todos = () => {
  const [todos, setTodos] = useState<ITodoItemsProps[]>([]);
  const handleAdd = (title: string) => {
    const payload = {
      title,
      status: false,
      id: todos.length + 1,
    };
    axios.post("http://localhost:8080/posts", payload).then(getTodos);
    // setTodos([...todos, payload]);
  };

  const getTodos = () => {
    axios
      .get("http://localhost:8080/posts")
      // .then(({data}:{data:ITodoItemsProps[]}) => {
      //   setTodos(data)
      // });
      .then((responce:AxiosResponse<ITodoItemsProps[]>)=>{
        const {data}=responce;
        setTodos(data)
      })
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <>
      <Header label="Todos" />
      <TodoInput onClick={handleAdd}></TodoInput>

      {todos.length > 0 &&
        todos.map((item) => {
          return <TodoItem key={item.id} {...item}></TodoItem>;
        })}
    </>
  );
};
