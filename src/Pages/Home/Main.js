import React from 'react'
import Banner from './../../Components/MainAllComponents/Banner/Banner'
import UnderBannerItems from './../../Components/MainAllComponents/UnderBannerItems/UnderBannerItems'
import Categories from "./../../Components/MainAllComponents/Categories/Categories";
import Popular from './../../Components/MainAllComponents/Popular/Popular';
import ActualItems from './../../Components/MainAllComponents/Actual/ActualItems'
import SalesItems from './../../Components/MainAllComponents/SalesItems/SalesItems';

function Main(props) {
  return (
    <div>
        <Banner />
        <UnderBannerItems/>
        <Categories/>
        <Popular cartData={props.cartData} setCartData={props.setCartData}
        favoriteData={props.favoriteData} setFavoriteData={props.setFavoriteData}/>
        <ActualItems></ActualItems>
        <SalesItems cartData={props.cartData} setCartData={props.setCartData}
        favoriteData={props.favoriteData} setFavoriteData={props.setFavoriteData}/>
    </div>
  )
}

export default Main