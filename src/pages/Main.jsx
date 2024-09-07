import { useEffect, useRef, useState } from 'react';
import Header from "../components/Header"
import ImgLayout from '../components/ImgLayout';

const Main = () => {
    const [prevScrollTop, setPrevScrollTop] = useState(0);
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const mainSectionRef = useRef(null);
    const forElementRef = useRef(null);
    const loveElementRef = useRef(null);
    const feelsElementRef = useRef(null);

    

    useEffect(() => {
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
                    const leftVal = 120 - progress * 200;
                    feelsElement.style.left = `${leftVal}%`;

                    // 방향에 따른 클래스 추가/제거
                    const direction = scrollTop > prevScrollTop ? "left" : "right";
                    feelsElement.classList.add(direction);

                    setTimeout(() => {
                        feelsElement.classList.remove(direction);
                    }, 400);
                }
            }
            setPrevScrollTop(scrollTop);
        
        }

        window.addEventListener('scroll', onScroll);
        
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [prevScrollTop, windowWidth, windowHeight])

    const infoSectionStyle = {
        marginTop: `${windowWidth + windowHeight}px`
    }

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
                    <strong>World-class noise cancellation</strong>
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
                    <strong>The sound and silence are all you</strong>
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
            </section>
        </>
    )
}

export default Main;