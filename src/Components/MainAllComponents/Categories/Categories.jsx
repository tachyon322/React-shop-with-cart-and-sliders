import React from "react";
import "./Categories.css";
import { CateData } from "./CategoriesData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Categories() {
  return (
    <div className="categories-root">
      <div className="categories-container wide-wrap">
        <img
          className="categories-img"
          src={require("./../../../imgs/man-blueBg.png")}
          alt=""
        />

        <div className="categories-main">
          <h1>Категории товаров</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec dui nunc mattis. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam.
          </p>

          <div className="slide-w-pagination">
            <Splide
              aria-label="My Favorite Images"
              options={{type: 'loop', width: 1090, height: '100%', perPage: 5, perMove: 1, arrows: false, 
              pagination: false, gap: '20px', drag: 'free'}}>

              {CateData.map((item, index) => (
                <SplideSlide className='slide' key={index}>
                  <a href="#">
                    <img src={item.image} alt="" />
                    <h2 className="slide-title">{item.title}</h2>
                  </a>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
