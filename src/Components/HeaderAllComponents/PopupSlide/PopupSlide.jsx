import React from 'react'
import './PopupSlide.css'

export default function PopupSlide(props) {
  return (props.trigger) ? (
    <div className='popup-slide wide-wrap'>
        <ul className='popup-slide-ul'>
            <ul className="child__ul">
                <li>ДЕТЯМ</li>
                <li>Просмотреть все</li>
                <li>Бестселлеры</li>
                <li>Новое в разделе "Одежда"</li>
                <li>Пуховики и куртки</li>
                <li>Худи и Свитшоты</li>
                <li>Джинсы</li>
                <li>Футболки</li>
                <li>Свитера</li>
                <li>Джоггеры</li>
            </ul>

            <ul className="child__ul">
                <li>НОВИНКИ БРЕНДОВ</li>
                <li>Adidas</li>
                <li>New Balance</li>
                <li>Bape</li>
                <li>Nike</li>
                <li>Carhartt</li>
                <li>Vlone</li>
                <li>Футболки</li>
                <li>The North Face</li>
                <li>Gap</li>
            </ul>

            <ul className="child__ul child-ul3">
                <li className='li-title'>ТОП ИЗБРАННЫХ</li>

                <div className="child-ul__grid">
                    <li className='list-items'>
                        <img src={require('./../../../imgs/t-shirt.png')} alt="" />
                        <p>Футболки</p>
                    </li>
                    <li className='list-items'>
                        <img src={require('./../../../imgs/hoodie.png')} alt="" />
                        <p>Худи</p>
                    </li>
                    <li className='list-items'>
                        <img className='child-ul3__li__s-shirt' src={require('./../../../imgs/s-shirt.png')} alt="" />
                        <p>Свитшоты</p>
                    </li>
                    <li className='list-items'>
                        <img src={require('./../../../imgs/sleeve.png')} alt="" />
                        <p>Лонгсливы</p>
                    </li>
                </div>
            </ul>

            <ul className="child__ul">
                <li>
                    <img className='slide-big-img' src={require('./../../../imgs/hoodie-kofta.png')} alt="" />
                </li>

                <li>
                    <img className='slide-big-img' src={require('./../../../imgs/Vetrovka.png')} alt="" />
                </li>
            </ul>
        </ul>
    </div>
  ) : '';
}
