import  React, { useRef, useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import '../../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

import GalleryItem from "../galleryItem/GalleryItem";
import { imageData, points } from './imageData';

import './Gallery.scss';


export default function Gallery () {
  // const ref = useRef(null);
   
  // useEffect(() => {
  // if(ref) {
  //   new LocomotiveScroll({
  //     el: ref.current,
  //     smooth: true,
  //     direction: 'horizontal'
  //   })
  // }
  // }, [])
  const images  = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => 
      <GalleryItem key={url} 
              index={elementIndex} 
              src={url} 
              columnOffset={elementIndex*14}/>
  )
  )

  return (
    // <section className="gallery-container">
        <div className="scroll-container" d-scroll-direction="horizontal">
          <div className="content" >
            <div className="gallery">
            { images }
              <div className="behind-text fill">майстри бьюті індустрії</div>
              <div className="behind-text fill"></div>
            </div>
          </div>
        </div>
    // </section>
  )
}