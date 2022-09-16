import React, { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    <div>
      <Header label="Counter">
        <div>here is your Count</div>
      </Header>
      <Header label={`${count}`} />
      <Button
        label="incriment"
        handleClick={() => {
          handleClick(1);
        }}
      ></Button>
      <Button
        label="decriment"
        handleClick={() => {
          handleClick(-1);
        }}
      ></Button>
    </div>
  );
};
