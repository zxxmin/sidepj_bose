import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate();

    const menuItems = [
        {
            title: 'HEADPHONES',
            subMenu: ['All Headphones', 'Noise Cancelling Headphones', 'Spatial Audio Headphones']
        },
        {
            title: 'EARBUDS',
            subMenu: ['All Earbuds', 'In Ear Earbuds', 'Open Ear Earbuds', 'Noise Cancelling Earbuds']
        },
        {
            title: 'SPEAKERS',
            subMenu: ['All Speakers', 'Bluetooth Speakers', 'Home Audio Speakers', 'Outdoor Speakers', 'Waterproof Speakrs']
        },
        {
            title: 'HOME THEATER',
            subMenu: ['All Home Theater', 'Soundbars', 'Subwoofers', 'Surround Sound Speakers', 'Dolby Atmos Systems']
        },
        {
            title: 'OUR 60TH',
            subMenu: ['Explore 60th Anniversary', 'Shop Diamond Collection', 'Enter Diamond Giveaway', 'Discover SPIN x BOSE', "Uncover Bose's History"]
        },
    ]

    return (
        <header>
            <div className="nav-wrap">
                <h1><a href="#">BOSE 로고</a></h1>

                <nav>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href="#none" title={`${item.title} 바로가기`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <ul>
                        <li>
                            <a
                                href="#none"
                                className="user"
                                title="my bose 바로가기"
                                onClick={() => nav('/login')}
                            >
                                my bose
                            </a>
                        </li>
                        <li>
                            <a
                                href="#none"
                                className="cart"
                                title="장바구니 바로가기"
                                onClick={() => nav('/login')}
                            >
                                장바구니
                            </a>
                        </li>
                        <li>
                            <a
                                href="#none"
                                className="search"
                                title="검색 바로가기"
                                onClick={() => nav('/login')}
                            >
                                검색
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <ul>
                            <li><a href="#none">New & Featured</a></li>
                            <li><a href="#none">All Headphones</a></li>
                            <li><a href="#none">Noise Cancelling Headphones</a></li>
                            <li><a href="#none">Spatial Audio Headphones</a></li>
                            <li><a href="#none">Accessories</a></li>
                            <li><a href="#none">Sale</a></li>
                            <li><a href="#none">Refurbished</a></li>
                            <li><a href="#none">Gift Cards</a></li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;