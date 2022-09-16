import React from 'react';

import './TopBar.scss';
import profile from '../../pic/profile.PNG';

export default function TopBar() {
    return (
        <div className="top">
            <div className="top-heading">
                <h2>Майстри та фрілансери з УкраЇни у франціЇ</h2>
            </div>

            <div className="top-content">
                <div className="top-content__left">
                  <h1>MOTANKA</h1>
                </div>

                <div className="top-content__center">
                    <h3>ukr / fr</h3>
              </div>
        
                <div className="top-content__right">
                    <img className="topImage" src={profile} alt="profile image" />
                    <i className="fa-solid fa-envelope envelope"></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <h3> logout</h3>
                </div>
        </div>
        
        </div>
    )
}