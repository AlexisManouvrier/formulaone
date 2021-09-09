
import '../styles/index.scss'
import Logo from './Logo';
//import React, { useState } from 'react';
import AsideMenu from './AsideMenu';
import BtnBurger from './BtnBurger';

const Navigation = () => { 
    
    //const btnBurger = [toggleMenu, setToggleMenu] = useState();   
    
    return (
        <>        
        <header>
            <nav>        
                <Logo />
                <BtnBurger />
            </nav> 
            <AsideMenu />                     
        </header>                    
        </>        
    );   
};

export default Navigation;