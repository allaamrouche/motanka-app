import React from 'react';

import './Post.css';

import postImg from '../../pic/sunflowers4.jpg';
import Category from '../../utils/category/Category';

export default function Post() {
    return(
        <div className="post">
            <img className="postImg" src={postImg} alt="post" />

            <div className="postInfo">
              <Category />
              <h3 className="postTitle">
                Nails master
              </h3>
              <hr />
              <span className="postDate">Published 1 hour ago</span>
              <div className="postDesc">
              Readymade quinoa beard shoreditch bicycle rights. 
              Synth tofu ethical, biodiesel before they sold out PBR messenger 
              bag readymade mcsweeney’s seitan echo park brooklyn pitchfork wayfarers tumblr. Quinoa bicycle rights salvia, mlkshk carles yr tattooed marfa high 
              life helvetica artisan wayfarers next level butcher gluten-free.
              </div>
            </div>
        </div>
    )
}