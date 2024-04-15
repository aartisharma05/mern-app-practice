import React from "react";

export default function MobileList(props) {
  console.log(props);
  return (
    <>
      <img className="h-10 w-10" src={props.img} alt="img" />
      <span>
        <p>{props.brand}</p>
        <p>{props.price}</p>
      </span>
      <button>Add to Cart</button>
    </>
  );
}
