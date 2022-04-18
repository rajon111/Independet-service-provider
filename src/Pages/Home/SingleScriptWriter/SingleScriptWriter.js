import React from 'react';

const SingleScriptWriter = ({scriptWriter}) => {
    const {name, img,description} = scriptWriter;
    return (
        <div className='director-card'>
            <img className='w-100' src={img} alt="" />
            <h2 className='dir-name'>{name}</h2>
            <p><small className='discription'>{description}</small></p>
            <button className=''>UpComming</button>
            
        </div>
    );
};

export default SingleScriptWriter;