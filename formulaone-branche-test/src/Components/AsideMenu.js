import React from 'react';
import { NavLink } from 'react-router-dom';

const AsideMenu = () => {
    return (
        <>
        <aside id="menu" className="hidden">                    
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
        </>
    );
};

export default AsideMenu;