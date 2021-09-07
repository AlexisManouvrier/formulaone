import React from 'react';
import '../styles/index.scss'
import Logo from './Logo';

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
                    <li></li>
                </ul>
            </aside>            
        </header>            
        </>
    );
};

export default Navigation;