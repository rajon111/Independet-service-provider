import React from 'react';
import Banner from '../Banner/Banner';
import ScriptWriters from '../ScriptWriters/ScriptWriters';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <ScriptWriters></ScriptWriters>
        </>
    );
};

export default Home;