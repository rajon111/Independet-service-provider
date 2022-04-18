import React from 'react';
import image from '../../images/about/own.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            
            <div className='img-div mt-5'>
                <img src={image} alt="" />
            </div>
            <h1 className='pt-3'>Golam Mostofa Rajon</h1>
            <p style={{border:'1px solid skyblue'}} className='p-3 '> My goal is to be a full-stack developer. I am trying to more focus for my passion. I have to be consistent what i am doing. I have a goal of removing as much plastic as i can from my life. Be positive, stay clam and stay healthy.</p>
        </div>
    );
};

export default About;