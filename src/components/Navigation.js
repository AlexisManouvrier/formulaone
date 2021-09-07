import React from 'react';
import '../styles/index.scss'
import Logo from './Logo';
import './OpenMenu';

const Navigation = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <Logo />
                    <span className="btn-burger"></span>
                </ul>
            </nav>
            <aside id="menu">
                <div className="container-banniere"></div>                
                <ul>
                    <li> home </li>
                    <li> about </li>
                    <li> about </li>
                    <li> about </li>
                    <span className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </span>
                </ul>
            </aside>            
        </header>                    
        </>        
    );   
};

export default Navigation;