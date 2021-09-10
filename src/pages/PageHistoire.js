import React from 'react';
import Slideshow from '../components/Histoire';
import Navigation from '../components/Navigation';

const PageHistoire = () => {
    return(
        <>
        <Navigation />
        <div className="root">
        <Slideshow />        
        </div>
        </>
    )
};

export default PageHistoire;