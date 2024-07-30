import { useState } from 'react';

function useCart() {
  const [cartData, setCartData] = useState(JSON.parse(window.localStorage.getItem("cartData")) || []);

  const addToCart = (image, title, price) => {
    let newData = cartData;
    newData.push({ image, title, price });
    setCartData(newData);
    window.localStorage.setItem("cartData", JSON.stringify(newData));

  };

  return {
    cartData,
    addToCart
  };
}

export default useCart;