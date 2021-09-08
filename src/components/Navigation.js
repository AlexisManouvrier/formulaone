//import React from 'react';
import '../styles/index.scss'
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Navigation = () => {
    // open and close the menu by changing the booleans false to true 
    // toggleMenu false = menu closed  
    // toggleMenu true = menu open  
    const [toggleMenu, setToggleMenu] = useState(false);
    const [openAnimation, setOpenAnimation] = useState(false);

    //openAnimation = document.querySelector('#menu');

    const toggleNav = () => {
        // ! switch booleans value 
        setToggleMenu(!toggleMenu)
        setOpenAnimation(!openAnimation)
    }
    
    return (
        <>        
        <header>
            {toggleMenu && (
                <aside id="menu" className="visible">
                    <div className="container-banniere"></div>
                    <div className="container-menu">               
                        <ul>
                            <NavLink to="/" className="navLink"> home </NavLink>
                            <NavLink to="/news" className="navLink"> news </NavLink>
                            <NavLink to="/member" className="navLink"> membres </NavLink>
                            <NavLink to="/history" className="navLink"> histoire </NavLink>
                            <NavLink to="/contact" className="navLink"> contact </NavLink>                    
                            <div className="social-icons">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </ul>
                    </div> 
                </aside> 
            )}

            <nav>        
                <Logo />
                <span className="btn-burger" onClick={toggleNav}></span>
            </nav>                      
        </header>                    
        </>        
    );   
};

export default Navigation;