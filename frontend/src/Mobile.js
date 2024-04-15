import React from "react";
import MobileList from "./MobileList";

export default function Mobile() {
  const mobiles = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OTj2Z_tui4EzkzICUEZVkFNmH8IiCz4OgQ&usqp=CAU",
    brand: "lenovo",
    price: 11500,
  };

  return (
    <>
      <MobileList
        image={mobiles.img}
        brand={mobiles.brand}
        price={mobiles.price}
      />
    </>
  );
}
