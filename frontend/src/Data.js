import React from "react";
import { useState } from "react";
import datas from "./datas.json";
const Data = () => {
  const [nData, setnData] = useState(datas);
  console.log(datas);

  const handleRemove = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };
  return (
    <div>
      <ul>
        {nData.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        onClick={(e) => {
          setnData([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Data;
