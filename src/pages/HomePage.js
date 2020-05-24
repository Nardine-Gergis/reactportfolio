import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import logo from '../assets/images/n.jpg'; 

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <div className="text-center ">

              <img src={logo} alt="Logo" className="rounded shadow " />;
            </div>
            <Carousel />
        </div>
    );

}

export default HomePage;