import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Nardine. I'm a full stack engineer with experience in  Express JS, Node JS, MySQL, MongoDB, and React and have a Bachelors degree in Computer Science.</p>

            <p>My dream is to one day start my own business and become an entrepreneur.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            

            
            </Content>
        </div>
    );

}

export default AboutPage;