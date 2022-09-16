import React, { useContext } from 'react';
import cn from 'classnames';
import { MenuContext } from '../MenuManager/MenuManager';

import './MenuButton.scss';

export default function MenuButton () {
    const { open, setOpen } = useContext(MenuContext);
    return(
        // <div className={cn("menu-button-wrapper", {open})}>
        <div className="menu-button-wrapper">
            <button 
            className='menu-button'
            onClick={() => setOpen(!open)}
            >
                <span 
                    style={ open ? { color:'white'} : {color: 'black'} } >
                    {open ? 'close' : 'menu'}
                </span>
            </button>
        </div>
    )
}