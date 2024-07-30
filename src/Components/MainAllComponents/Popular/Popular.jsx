import React, { useEffect } from "react";
import "./Popular.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { PopularData } from "./PopularData";

export default function Popular(props) {


  function changeBgColor(index) {
    document.querySelectorAll(".shopping-svg")[index].classList.toggle("bg-color");
  }

  function changeHeartColor(index) {
    document.querySelectorAll(".hearth-btn")[index].classList.toggle("heart-color");
  }

  function animateButton(index) {
    document.querySelectorAll(".shopping-btn-head")[index].style =
      "transform: scale(1.3)";
    setTimeout(() => {
      document.querySelectorAll(".shopping-btn-head")[index].style =
        "transform: scale(1)";
    }, 200);
  }

  function addToCart(image, title, price) {
    let newData = props.cartData;
    newData.push({ image, title, price });
    props.setCartData(newData);
    window.localStorage.setItem("cartData", JSON.stringify(newData));
  }

  function addToFavorite(image, title, price) {
    let newData = props.favoriteData;
    newData.push({ image, title, price });
    props.setFavoriteData(newData);
    window.localStorage.setItem("favoriteData", JSON.stringify(newData));
  }

  return (
    <div className="popular-root">
      <div className="popular-container wide-wrap">
        <div className="popular-title">
          <h1>Популярное</h1>

          <a href="#" className="popular-title-catalog">
            <p>В каталог</p>

            <svg
              className="popular-title-svg"
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.7071 8.7071C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928931C17.9526 0.538406 17.3195 0.538406 16.9289 0.928931C16.5384 1.31946 16.5384 1.95262 16.9289 2.34314L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.7071ZM8.74228e-08 9L24 9L24 7L-8.74228e-08 7L8.74228e-08 9Z"
                fill="#565656"
              />
            </svg>
          </a>
        </div>

        <Splide
          hasTrack={false}
          options={{
            perPage: 5,
            perMove: 1,
            gap: 30,
            pagination: false,
          }}>
          <SplideTrack className="Splide__track">
            {PopularData.map((item, index) => (
              <SplideSlide key={index} className="popular-slide">
                <div className="slide-container">
                  <div className="popular-image-container">
                    <img src={item.image} alt="" />
                    <button className="hearth-btn"
                    onClick={() => addToFavorite(item.image, item.title, item.price)
                    }>
                      <svg
                        className="hearth-btn"
                        width="36"
                        height="34"
                        viewBox="0 0 36 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.23565 7.44333C8.24223 3.18981 14.5083 3.18471 17.523 7.43313L17.9934 8.09614L18.4152 7.49127C21.4046 3.21225 27.6818 3.17043 30.7268 7.40865C31.7559 8.84043 32.2598 10.5881 32.1524 12.353C32.045 14.1179 31.333 15.7904 30.1381 17.0846L18.739 29.4249C18.6443 29.5275 18.5297 29.6093 18.4023 29.6652C18.2749 29.7211 18.1374 29.75 17.9984 29.75C17.8595 29.75 17.722 29.7211 17.5946 29.6652C17.4672 29.6093 17.3526 29.5275 17.2579 29.4249L5.85073 17.0397C4.66806 15.7557 3.96102 14.0996 3.84897 12.3509C3.73691 10.6022 4.2267 8.86808 5.23565 7.44129V7.44333ZM15.8781 8.62044C13.6717 5.50935 9.08391 5.51343 6.88259 8.62758C6.14443 9.67199 5.78621 10.9412 5.86841 12.221C5.95061 13.5008 6.46818 14.7128 7.33378 15.6525L18.0005 27.2319L28.657 15.6954C29.5326 14.7472 30.0544 13.5219 30.1332 12.2288C30.212 10.9357 29.8429 9.65521 29.089 8.60616C26.8583 5.50119 22.2594 5.53281 20.0693 8.66736L18.826 10.4463C18.7329 10.5793 18.6097 10.6879 18.4665 10.763C18.3234 10.8382 18.1644 10.8777 18.003 10.8783C17.8416 10.8789 17.6824 10.8406 17.5387 10.7665C17.395 10.6924 17.271 10.5847 17.177 10.4524L15.877 8.62044H15.8781Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="popular-price-w-shopping-btn">
                    <h2>{item.price} ₽</h2>
                    <button
                      className="shopping-btn-head"
                      onClick={() =>
                        addToCart(item.image, item.title, item.price) ||
                        animateButton(index) || changeBgColor(index)
                      }>
                      <svg className="shopping-svg"
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.25 4.75H1.75C1.33579 4.75 1 5.08579 1 5.5V17.5C1 17.9142 1.33579 18.25 1.75 18.25H18.25C18.6642 18.25 19 17.9142 19 17.5V5.5C19 5.08579 18.6642 4.75 18.25 4.75Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.25 7.75V4.75C6.25 3.75544 6.64509 2.80161 7.34835 2.09835C8.05161 1.39509 9.00544 1 10 1C10.9946 1 11.9484 1.39509 12.6517 2.09835C13.3549 2.80161 13.75 3.75544 13.75 4.75V7.75"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="popular-cloth-names">
                    <a href="https://loft19.ru/stoneisland">
                      <p>{item.title}</p>
                    </a>
                    <a href="#">
                      <p className="popular-description">{item.description}</p>
                    </a>
                    <a href="#">
                      <p>{item.sizes}</p>
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__pagination">
            <li className="splide__pagination__page" style={{}}></li>
          </div>

          <div className="splide__arrows">
            <button
              className="splide__arrow splide__arrow--prev back-btn"
              style={{ width: 40, height: 40, backgroundColor: "#565656" }}>
              <img src={require("./../../../imgs/icons/toLeft.png")} alt="" />
            </button>

            <button
              className="splide__arrow splide__arrow--next next-btn"
              style={{ width: 40, height: 40, backgroundColor: "#565656" }}>
              <img src={require("./../../../imgs/icons/toRight.png")} alt="" />
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
}
