import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const navigate = useNavigate()

    const {name,demand,img,description,id} = service;
    return (
        <div className='director-card'>
            <img className='w-100' src={img} alt="" />
            <h2 className='dir-name'>{name}</h2>
            <p><strong>Booking Demand:</strong> {demand}</p>
            <p><small className='discription'>{description}</small></p>
            <button onClick={()=>navigate(`/service/${id}`)}>Checkout</button>
        </div>
    );
};

export default Service;