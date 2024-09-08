import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import ImgLayout from '../components/ImgLayout';
import InfoBose from '../components/InfoBose';
import SellImg from '../components/SellImg';

const Main = () => {
    const [prevScrollTop, setPrevScrollTop] = useState(0);
    const [selectedColor, setSelectedColor] = useState('Diamond 60Th Edition');
    
    const mainSectionRef = useRef(null);
    const forElementRef = useRef(null);
    const loveElementRef = useRef(null);
    const feelsElementRef = useRef(null);
    const subSectionRef = useRef(null);
    
    const nav = useNavigate();
    
    useEffect(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop;

            if(mainSectionRef.current) {
                if(scrollTop > windowWidth) {
                    Object.assign(mainSectionRef.current.style, {
                        position: 'absolute',
                        top: `${windowWidth}px`,
                        height: '100%'
                    })
                } else {
                    Object.assign(mainSectionRef.current.style, {
                        position: '',
                        top: '',
                        height: ''
                    });
        
                    const percent = 100 - (scrollTop / windowWidth * 100);
        
                    if(forElementRef.current && loveElementRef.current) {
                        forElementRef.current.style.right = `${-(percent) + 5}%`;
                        loveElementRef.current.style.left = `${-(percent) + 5}%`;
                    }
                }
            }

            // 글자 좌우로 움직이기
            if(feelsElementRef.current) {
                const feelsElement = feelsElementRef.current;
                const elementRect = feelsElement.getBoundingClientRect();
                const elementTop = elementRect.top + window.scrollY; 
                const moveStart = elementTop - windowHeight;
                const moveEnd = elementTop;
                
                if(scrollTop >= moveStart && scrollTop <= moveEnd) {
                    const progress = (scrollTop - moveStart) / (moveEnd - moveStart);
                    const leftVal = 130 - progress * 250;
                    feelsElement.style.left = `${leftVal}%`;

                    const direction = scrollTop > prevScrollTop ? "left" : "right";
                    feelsElement.classList.add(direction);

                    setTimeout(() => {
                        feelsElement.classList.remove(direction);
                    }, 400);
                }
            }
            setPrevScrollTop(scrollTop);

            if (subSectionRef.current) {
                const subSectionBottom = subSectionRef.current.getBoundingClientRect().bottom + window.scrollY;
                const subSectionDiv = subSectionRef.current.querySelector('div');

                scrollTop+(windowHeight/0.8) >= subSectionBottom
                    ? subSectionDiv.classList.add('active')
                    : subSectionDiv.classList.remove('active');
            }
        
        }

        window.addEventListener('scroll', onScroll);
        
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [prevScrollTop])

    const infoSectionStyle = {
        marginTop: `${window.innerWidth + window.innerHeight}px`
    }

    const infoBoseData = [
        {
            title: 'The clearest phone calls',
            text: 'No more “huh?” when you try to say “hello.” Use one bud or two for the clearest, most-natural sounding phone calls.',
            cls: 'call'
        },
        {
            title: 'Touch controls',
            text: 'Play/pause music, crank the volume, cycle modes, and switch tracks with a simple tap or swipe right on the earbuds.',
            cls: 'tap'
        },
        {
            title: 'Bose App',
            text: 'Personalize almost everything to your liking in the app with Adjustable EQ, custom modes, and a shortcut you access right on the earbud.',
            cls: 'setting'
        }
    ];

    const onChangeColor = (color) => {
        setSelectedColor(color);
    }

    const btnColor = [
        'Diamond 60Th Edition',
        'Lunar Blue',
        'Black',
        'White Smoke'
    ]

    return (
        <>
            <Header />
            
            <section className="main-section" ref={mainSectionRef}>
                <div className="main-left">
                    <img src="/main-left.png" alt="왼쪽 이어폰" />
                </div>
                <h1 className='for' ref={forElementRef}>FOR THE</h1>
                <h1 className='love' ref={loveElementRef}>LOVE OF MUSIC</h1>
                <div className="main-right">
                    <img src="/main-right.png" alt="오른쪽 이어폰" />
                </div>
            </section>

            <section className="info-section" style={infoSectionStyle}>
                <ImgLayout
                    type={'Right'}
                    imgSrc={'/sub1.webp'}
                    title={'Welcome to the acousitc sweet spot'}
                    text={'What you’re hearing is placed just in front of you, so it seems like you aren’t listening with earbuds at all.'}
                />
                <ImgLayout
                    type={'Left'}
                    imgSrc={'/sub2.webp'}
                    title={'Mind-bending natural sound'}
                    text={'It’s a groundbreaking experience with sound so real you’ll almost try to reach out and touch it.'}
                />
                <div className="only-txt">
                    <h3>World-class noise cancellation</h3>
                    <p>
                        Get real quiet when you want it and awareness when you need it.<br/>
                        Or blend the tow to your liking whit these noise cancelling earbuds.
                    </p>
                </div>
                <div className="move-txt">
                    <p className="feels" ref={feelsElementRef}>feels soooooo good!</p>
                    <img className="run-man" src="/run-man.png" alt="달리는 이미지" />
                </div>
                <div className="only-txt">
                    <h3>The sound and silence are all you</h3>
                    <p>
                        CustomTune technology auto-adjusts the noise cancellation and sound performance to your ears’ liking.<br/>
                        So everything hits just as it should.
                    </p>
                </div>
                <ImgLayout
                    type={'Left'}
                    imgSrc={'/sub3.webp'}
                    title={'Sooo comfy'}
                    text={'Umbrella-shaped eartips are super soft yet still seal off outside noise.'}
                />
                <ImgLayout
                    type={'Right'}
                    imgSrc={'/sub4.webp'}
                    title={'Sooo stable'}
                    text={'Stability bands hug your ears’ contours for a snug fit. Choose between 9 potential combos for the best fit.'}
                />
                <ImgLayout
                    type={'Left'}
                    imgSrc={'/sub5.webp'}
                    title={'Sound just got real'}
                    text={`These spatial audio earbuds with Bose Immersive Audio push the boundary of what it means to listen. So you get music that sounds realer than ever before.`}
                />
            </section>
            <section className="sub-section" ref={subSectionRef}>
                <div>
                    <h4>SOUND IS</h4>
                    <h4>POWER</h4>
                    <h4>BOSE</h4>
                </div>
            </section>
            <section className="sub-section2">
                <h3>Life made easier</h3>
                <div>
                    {infoBoseData.map((item, index) => (
                        <InfoBose
                            key={index}
                            title={item.title}
                            text={item.text}
                            cls={item.cls}
                        />
                    ))}
                </div>
            </section>
            <section className="sell-section">
                <SellImg
                    color={selectedColor}
                />
                <div className='sell-info'>
                    <h2>BOSE QuietComfort Ultra Earbuds</h2>
                    <em>$299.00</em>
                    <div>
                        <p>Color <span>{selectedColor}</span></p>
                        <ul>
                            {btnColor.map(color => (
                                <li key={color}>
                                    <button
                                        className={selectedColor === color ? 'active' : ''}
                                        onClick={() => onChangeColor(color)}
                                    >
                                        {color}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='cart-btn'>
                        <button className='add-to-cart' onClick={() => nav('/login')}>ADD TO CART</button>
                        <button className='add-to-hart' onClick={() => nav('/login')}>찜</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;