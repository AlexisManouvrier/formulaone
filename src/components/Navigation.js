
import '../styles/index.scss'
import Logo from './Logo';
import React, { useState } from 'react';
import AsideMenu from './AsideMenu';

const Navigation = () => { 
    
    const [toggleMenu, setToggleMenu] = useState(false); 
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }  
    
    return (
        <>        
        <header>
            <nav>        
                <Logo />
                <span className="btn-burger" onClick={toggleNav}></span> 
            </nav>
            {toggleMenu && (
              <AsideMenu /> 
            )}                                 
        </header>                    
        </>        
    );   
};

export default Navigation;