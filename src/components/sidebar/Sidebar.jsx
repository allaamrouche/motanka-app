import React from 'react';

import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <li className='sidebar-list__item'><a href="/">майстри манікюру</a></li>
                <li className='sidebar-list__item'><a href="/">нарощування нігтів</a></li>
                <li className='sidebar-list__item'><a href="/">лешмейкери</a></li>
                <li className='sidebar-list__item'><a href="/">бровісти</a></li>
                <li className='sidebar-list__item'><a href="/">перукарі</a></li>
                <li className='sidebar-list__item'><a href="/">косметологи</a></li>
            </ul>
        </div>
    )

}