import React from 'react';
import { NavLink } from 'react-router-dom';
import web from './Image/home1.PNG';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with' 
                imgsrc={web} 
                visit='/service' 
                btnname='Get Started' />
        </>
    )
}

export default Home;