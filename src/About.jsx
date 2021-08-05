import React from 'react';
import { NavLink } from 'react-router-dom';
import web from './Image/about1.PNG';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common 
                name='Welcome to About page' 
                imgsrc={web} 
                visit='/contact' 
                btnname='Contact Now'  />
        </>
    )
}

export default About;