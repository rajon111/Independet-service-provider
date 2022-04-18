import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Slide from 'react-reveal/Slide';

import './Services.css'

const Services = () => {
    const [services,setServices] = useState([])

    useEffect( ()=>{
        fetch('freelance.json')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div className='con'>
            <Slide left>
             <h2 className='services-title m-4'>Our Directors</h2>
            </Slide>
            
            <div className='services-container'>
                {
                    services.map(service => <Service key ={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;