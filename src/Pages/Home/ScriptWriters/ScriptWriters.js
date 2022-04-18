import React from 'react';
import swriter1 from '../../../images/swriters/swriter1.jpg'
import swriter2 from '../../../images/swriters/swriter-2.jpg'
import swriter3 from '../../../images/swriters/swriter-3.jpg'
import swriter4 from '../../../images/swriters/swriter-4.jpg'
import swriter5 from '../../../images/swriters/swriter-5.jpg'
import swriter6 from '../../../images/swriters/swriter-6.jpg'
import SingleScriptWriter from '../SingleScriptWriter/SingleScriptWriter';
import LightSpeed from 'react-reveal/LightSpeed';

const ScriptWriters = () => {
    //local data generate

    const scriptWriters =[
        {id:1, name:'Anisul Hoque', description:'Well known writer,teacher and BD cricket team die hard supporter',img: swriter1},
        {id:2, name:'Adnan Al rajeev',description:'Well known writer,natok actor and BD cricket team die hard supporter ' , img: swriter2},
        {id:3, name:'Mamunur Rasid',description:'Well known writer,play maker and BD cricket team die hard supporter ' , img: swriter3},
        {id:4, name:'Marzuk Russell',description:'Well known writer,song writer and BD cricket team die hard supporter ' , img: swriter4},
        {id:5, name:'Tanvir Karim',description:'Well known writer,natok actor and BD Football team die hard supporter ' , img: swriter5},
        {id:6, name:'Massu Ahamed',description:'Well known writer,natok actor and Socail Activist', img: swriter6},
    ]

    return (
        <div className='con'>
            <LightSpeed left>
                 <h2 className='services-title m-4'>OUR SCRIPTWRITERS</h2>
            </LightSpeed>
            
            <div className='services-container'>
                {
                   scriptWriters.map(scriptWriter => <SingleScriptWriter key={scriptWriter.id} scriptWriter={scriptWriter} ></SingleScriptWriter>) 
                }

            </div>

        </div>
    );
};

export default ScriptWriters;