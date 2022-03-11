import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </>
    );
};

export default Home;