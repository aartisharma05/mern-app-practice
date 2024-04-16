import React from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncClick() {
    setCount(count + 1);
  }

  function handleDecClick() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncClick}>+</button>
      <button onClick={handleDecClick}>-</button>
    </>
  );
}
