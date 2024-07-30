import React from "react";
import "./Cart.css";
import { useRef, useEffect, useState } from "react";

function Cart(props) {
  let cart = useRef();

  useEffect(() => {
    let onClose = (e) => {
      if (cart.current && !cart.current.contains(e.target)) {
        props.setPosition(0);
      }
    };
    
    document.addEventListener("mousedown", onClose);
  }, [])


  if (props.position === 0) {
    return null;
  }

  return (
    <div className="bg">
      <div
        className="cart-root" ref={cart}
        style={{ transform: `translateX(${props.position}px)` }}>
        <h1 className="cart-title">Корзина </h1>

        <button className="cart-close-btn" onClick={() => props.setPosition(0)}>
          X
        </button>

        <div className="cart-items">
          {props.cartData?.map((item, index) => (
            <div className="cart-item" key={index}>
              <img className="cart-item__img" src={item.image} alt="" />

              <div className="cart-item__text">
                <div className="cart-item__texts">
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                </div>
                <button onClick={() => props.setCartData(props.cartData.filter((_, i) => i !== index)) || window.localStorage.setItem('cartData', JSON.stringify(props.cartData.filter((_, i) => i !== index)))}
                className="cart-item__delete-btn">
                  <svg width='30' height='30'
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.5001 6H3.5"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"></path>{" "}
                      <path
                        d="M9.5 11L10 16"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"></path>{" "}
                      <path
                        d="M14.5 11L14 16"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"></path>{" "}
                      <path
                        d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                        stroke="#000000"
                        stroke-width="1.5"></path>{" "}
                      <path
                        d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
