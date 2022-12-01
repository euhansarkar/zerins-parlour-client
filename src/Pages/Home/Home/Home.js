import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Message from './Message/Message';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Care></Care>
            <Testimonials></Testimonials>
            <Message></Message>
        </div>
    );
};

export default Home;