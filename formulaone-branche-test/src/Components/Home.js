import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="container-site">
                <div className="content">
                    <h1 className="big-title">son nom c'est oui-oui, oui-oui</h1>
                    <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
                    <div className="call-to-action"><a href="/a-propos"> discover </a></div>
                    
                </div>
                <video autoPlay muted loop src="../images/video-home.mp4"></video> 
            </div>
                    
        </>
    );
};

export default Home;