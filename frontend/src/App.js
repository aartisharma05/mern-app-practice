import React from 'react';
import { useState, useEffect } from "react";
export function App(props) {
   const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

    
      <ul>
        {data?.map((item) => {
          return (<li key = {item.id}> <p>{item.title}</p>  </li>)
      })}



      </ul>





    </div>
  );
}

// Log to console
console.log('Hello console')
