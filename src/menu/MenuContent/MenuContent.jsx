import React, { useContext } from 'react';
import cn from 'classnames';

import { MenuContext } from '../MenuManager/MenuManager';

import Facebook from '../../utils/facebook/Facebook';

import Img1 from '../../pic/sunflowers1.jpg';
import Img2 from '../../pic/sunflowers2.jpg';
import './MenuContent.scss';

const internalLinks = [
    {
        url: "#1",
        category: <span> Індустрія краси</span>,
        img: Img1
    },
    {
        url: "#2",
        category: <span>Перекладачі</span>,
        img: Img2
    },
    {
        url: "#3",
        category: <span> Репетитори</span>,
        img: Img1
    },
{
    url: "#4",
    category: <span> Фрілансери</span>,
    img: Img1
}
]
const externalLinks = [
    {
        url: 'www.facebook.com',
        component: <Facebook />
    },
     {
        url: 'www.facebook.com',
        component: <Facebook />
    },
     {
        url: 'www.facebook.com',
        component: <i className="fa-brands fa-facebook"></i>
    }
]

export default function MenuContent () {
    const { open } = useContext(MenuContext)
    return (
        <div className="menu-holder">
            <div className={cn ("menu-inside", {open})}>
                <div className="menu-nav-container">
                    <div className="menu-nav-container__heading">
                        <button>Додати оголошення</button>
                        <input type="search" placeholder= "Пошук" />
                   </div>
                   <ul className="internal-nav-links">
                     { internalLinks.map(( link ) => (
                        <li className="internal-list"
                            key={link.url}>
                            <a className="internal-list__link" href={link.url}>{link.category}</a>
                            <img className="internal-list__img" src={link.img} alt="" />
                        </li>
                     ))}
                   </ul>
                   <ul className="external-nav-links">
                     { externalLinks.map(( link ) => (
                        <li key={link.url}>
                            <a href={link.url}>{link.component}</a>
                        </li>
                     ))}
                   </ul>
                </div>
            </div>
        </div>

    )
}