import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <div className='banner-root wide-wrap'>
        <div className="banner-container">
            <img className='banner-img' src={require('./../../../imgs/banner.png')} alt="" />

            <div className="banner-container__text-w-btn">
                <h1 className='banner-collection__title'>Summer mood</h1>

                <h1 className='banner-collection__description'>-20% на новую коллекцию.</h1>

                <button className='banner-btn'>
                    <a className='banner-btn__a' href="#">
                        В каталог

                        <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64644L21.1716 0.464464C20.9763 0.269202 20.6597 0.269202 20.4645 0.464464C20.2692 0.659727 20.2692 0.976309 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.73079 20.9763 7.73079 21.1716 7.53553L24.3536 4.35355ZM4.37114e-08 4.5L24 4.5L24 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="white" />
                        </svg>
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}
