import React from 'react';

import profileImg from '../../pic/profile.PNG';

import './Settings.css';

export default function Settings() {
    return(
        <div className="settings">
            <div className='settingsWrapper'>
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsProfile"></div>
                          <img src={profileImg} alt="" className="settingsProfilePic"/>
                        <label htmlFor='fileInput'>
                            <i className='settingsIcon far fa-user-circle'></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />

                        <label>Name</label>
                        <input type="text" placeholder="Alla" /> 

                        <label>Last name</label>
                        <input type="text" placeholder="Amrouche" /> 

                        <label>User name</label>
                        <input type="text" placeholder="alla_amrush" /> 

                        <label>City</label>
                        <input type="text" /> 

                        <label>Postal Code</label>
                        <input type="number"  /> 

                        <label>Email</label>
                        <input type="email" placeholder="alla@gmail.com" /> 

                        <label>Password</label>
                        <input type="password" /> 

                        <button className='settingsSubmit'>Update</button>
                    </form>
            </div>
        </div>
    )
}