import React from 'react'
import './UnderBannerItems.css'
import {UBData} from "./UnderBannerData";

export default function UnderBannerItems() {
  return (
    <div className='under-root'>
      <ul className="under-list wide-wrap">
          {UBData.map((item, index) => (
              <li className="under__item">
                  <a href='#' className='under__circle'>
                      <img src={item.image} alt=""/>
                  </a>
                  <p className='under-item-title'>{item.title}</p>
              </li>
          ))}
      </ul>
    </div>
  )
}