import React from 'react'
import { useState } from 'react'
import HeaderMain from './HeaderMain'
import Main from './Main'

export default function Home() {
  const [cartData, setCartData] = 
  useState(JSON.parse(window.localStorage.getItem('cartData')) || []);

  const [favoriteData, setFavoriteData] = 
  useState(JSON.parse(window.localStorage.getItem('favoriteData')) || []);

  return (
    <div>
        <HeaderMain cartData={cartData} setCartData={setCartData} 
        favoriteData={favoriteData} setFavoriteData={setFavoriteData}/>
        <Main cartData={cartData} setCartData={setCartData} 
        favoriteData={favoriteData} setFavoriteData={setFavoriteData}/>
    </div>
  )
}
