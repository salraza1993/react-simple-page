import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbars.css'

function Navbars() {
    const [click, setClick] = useState(false);
    const clickHandler = () => setClick(!click);
    const closeHandler = () => setClick(false);

    const menuItems = ["home", "services", "products", "sign-up"];
    const [menus, setMenus] = useState(menuItems);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="navbar-logo">
                    TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={clickHandler}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"} onClick={clickHandler}>
                    {
                        menus.map((menu, index) => {
                            return <li className="nav-item">
                                <Link to={`/${menu}`} className="nav-links" onClick={closeHandler}>{ menu }</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbars;
