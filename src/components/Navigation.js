//import React from 'react';
import '../styles/index.scss'
import Logo from './Logo';

//import React, { useState } from 'react';
import AsideMenu from './AsideMenu';

const Navigation = () => {  
    
    return (
        <>        
        <header>
            <nav>        
                <Logo />
                <span className="btn-burger"></span>
            </nav> 
            <AsideMenu />                     
        </header>                    
        </>        
    );   
};

export default Navigation;