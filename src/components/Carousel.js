import React from 'react';

import Card from '../components/Card';

import evnt from '../assets/images/evnt.jpg';
import book from '../assets/images/book.png';
import fitplay from '../assets/images/fitplay.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                
                {
                    id: 0,
                    title: 'Evventi',
                    subTitle: 'the event planner App',
                    imgSrc: evnt,
                    link: 'https://stormy-coast-97431.herokuapp.com/public',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Book Logger',
                    subTitle: 'Books library App',
                    imgSrc: book,
                    link: 'https://booklogger123.herokuapp.com/user/register#',
                    selected: false
                },
                {
                    id: 2,
                    title: 'FitPlay',
                    subTitle: 'A Fitness App',
                    imgSrc: fitplay,
                    link: 'https://stevenleonardo.github.io/project1/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;