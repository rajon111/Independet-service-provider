import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
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
            <h2 className='services-title m-4'>Our Directors</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service key ={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;