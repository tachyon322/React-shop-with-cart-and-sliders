import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="header-container wide-wrap">
                <div className="logo-w-city">
                    <a href="#"><h2 className="header-logo">Clothify</h2></a>

                    <div onClick={() => props.setTrigger(true)} className="menu-city">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_7702_605)">
                <path d="M8.00008 1.33334C5.20008 1.33334 2.66675 3.48001 2.66675 6.80001C2.66675 9.01334 4.44675 11.6333 8.00008 14.6667C11.5534 11.6333 13.3334 9.01334 13.3334 6.80001C13.3334 3.48001 10.8001 1.33334 8.00008 1.33334ZM8.00008 8.00001C7.26675 8.00001 6.66675 7.40001 6.66675 6.66668C6.66675 5.93334 7.26675 5.33334 8.00008 5.33334C8.73341 5.33334 9.33341 5.93334 9.33341 6.66668C9.33341 7.40001 8.73341 8.00001 8.00008 8.00001Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_7702_605">
                <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
                        </svg>

                        <p className="menu-city__p">{props.city}</p>
                    </div>
                </div>

                <nav>
                    <ul className="header-nav__ul">
                        <a href="#" onMouseEnter={() => props.setActive(true)} onMouseLeave={() => props.setActive(false)}>
                            <p>SALE</p>
                        </a>
                        <a href="#" onMouseEnter={() => props.setActive(true)} onMouseLeave={() => props.setActive(false)}>
                            <p>Женщинам</p>
                        </a>
                        <a href="#" onMouseEnter={() => props.setActive(true)} onMouseLeave={() => props.setActive(false)}> 
                            <p>Мужчинам</p>
                        </a>
                        <a href="#" onMouseEnter={() => props.setActive(true)} onMouseLeave={() => props.setActive(false)}>
                            <p>Детям</p>
                        </a>
                    </ul>
                </nav>

                <ul className="header-ul__controls">
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.8749 18.75C15.2241 18.75 18.7499 15.2242 18.7499 10.875C18.7499 6.52576 15.2241 3 10.8749 3C6.52564 3 2.99988 6.52576 2.99988 10.875C2.99988 15.2242 6.52564 18.75 10.8749 18.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M16.443 16.4438L20.9993 21.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <Link to="/favourites">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5197 19.7848L19.5544 12.3432C21.2829 10.5148 21.5379 7.50664 19.9022 5.58506C19.4925 5.10234 18.9941 4.713 18.4374 4.44077C17.8807 4.16855 17.2775 4.01917 16.6644 4.00173C16.0514 3.98429 15.4414 4.09916 14.8717 4.33934C14.302 4.57952 13.7845 4.93997 13.3508 5.39869L12.0286 6.79738L10.887 5.58975C9.15855 3.76128 6.31491 3.49152 4.49839 5.22187C4.04207 5.6553 3.67401 6.18253 3.41667 6.7714C3.15934 7.36027 3.01812 7.99843 3.00163 8.64694C2.98515 9.29546 3.09374 9.94072 3.32079 10.5434C3.54783 11.146 3.88857 11.6934 4.32222 12.1522L11.5375 19.7848C11.6678 19.9226 11.8444 20 12.0286 20C12.2128 20 12.3895 19.9226 12.5197 19.7848V19.7848Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                    <a href="#" onClick={() => props.setPosition(-410)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Header;