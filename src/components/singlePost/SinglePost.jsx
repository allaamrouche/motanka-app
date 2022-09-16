import React from 'react';
import Category from '../../utils/category/Category';
import singleImage from "../../pic/sunflowers3.jpg";

import './SinglePost.css';

export default function SinglePost() {
    return (
        <section className="singlePost">
           <div className="singlePostWrapper">
              <img className="singlePostImg" 
              src={ singleImage } 
              alt="" />
              <div className='singlePostHeading'>
                <h1 className="singlePostTitle">Hipster Ipsum</h1>
                <div className="singlePostEdit">
                    <i className="fa-solid fa-file-pen singlePostIcon"></i>
                    <i className="fa-solid fa-trash singlePostIcon"></i>
                </div>
                </div>
                <hr />
              <div className="singlePostInfo">
                <Category />
                <span className="singlePostAuthor"> Author: Alla Amrouche</span>
                <span className="singlePostDate"> 1 hour ago</span>
              </div>
              <p className="singlePostDesc">
              Readymade quinoa beard shoreditch bicycle rights. 
              Synth tofu ethical, biodiesel before they sold out PBR messenger 
              bag readymade mcsweeney’s seitan echo park brooklyn pitchfork wayfarers tumblr. Quinoa bicycle rights salvia, mlkshk carles yr tattooed marfa high 
              life helvetica artisan wayfarers next level butcher gluten-free.
              </p>
           </div>
        </section>
    ) 
}