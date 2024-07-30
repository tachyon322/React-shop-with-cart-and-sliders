import React, { useState } from 'react';
import HeaderSale from './../../Components/HeaderAllComponents/HeaderSale/HeaderSale';
import Header from './../../Components/HeaderAllComponents/Header/Header';
import Popup from './../../Components/HeaderAllComponents/Popup/Popup';
import {cities} from './../../Components/HeaderAllComponents/Popup/CitiesData';
import PopupSlide from './../../Components/HeaderAllComponents/PopupSlide/PopupSlide';
import Cart from './../../Components/HeaderAllComponents/Cart/Cart';

function HeaderMain(props) {

  const [buttonPopup, setButtonPopup] = React.useState(false);
  const [city, setCity] = useState('Москва');

  const [active, setActive] = React.useState(false); // PopupSlide состояние
  const [position, setPosition] = useState(0);

  return (
    <div className="App">
      <HeaderSale />
      <Header setPosition={setPosition} setActive={setActive} city={city} setCity={setCity} setTrigger={setButtonPopup} />
      
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className='Popup-container'>
          <p className='popup_p'>
            {cities.map((city) => (
              <a href='#' onClick={() => setCity(city.name)} ><li>{city.name}</li></a>
            ))}
          </p>
        </div>
      </Popup>

      <PopupSlide trigger={active} setTrigger={setActive} />

      <Cart cartData={props.cartData} setCartData={props.setCartData} setPosition={setPosition} position={position} />
    </div>
  );
}
export default HeaderMain;