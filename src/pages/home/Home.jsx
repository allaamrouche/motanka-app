import  React, { useRef, useEffect } from 'react';

import Header from '../../components/header/Header';
import ScrollText from '../../components/scrollText/ScrollText';
import About from '../../components/about/About';
import Gallery from '../../components/gallery/Gallery';
import Posts from '../../components/posts/Posts';
import './Home.css';

import LocomotiveScroll from 'locomotive-scroll';
import '../../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

export default function Home() {
    const homeRef = useRef(null);
   
    useEffect(() => {
    if(homeRef) {
      new LocomotiveScroll({
        el: homeRef.current,
        smooth: true
      })
    }
    }, [])
    return (
        <div className="home" data-scroll-container ref={homeRef}>
            <Header />
            {/* <ScrollText />
            <About /> */}
            {/* <Posts /> */}
            <About />
            <Gallery />
        </div>
    )
}