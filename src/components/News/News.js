import React from 'react';
import {CardDeck, Card, ListGroup } from 'react-bootstrap';
import './News.css';

const News = () => {
    return (
      <div>
      <h2 style={{margin: '2rem 0 3rem 0', }}> News & <strong>Events</strong>  </h2>

        <CardDeck className="cards">
        <Card className="singlecard">
          {/* <Card.Img className="cardimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf2iMZdYIwnGe0g4NjW_yGE-LQWZGW5f65uDIphZMTDVgow7Y1&usqp=CAU/100px160" /> */}
          <img alt="." style={{borderBottomLeftRadius:'1em', borderBottomRightRadius: '1em'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf2iMZdYIwnGe0g4NjW_yGE-LQWZGW5f65uDIphZMTDVgow7Y1&usqp=CAU/100px160" />
          <Card.Body style={{textAlign: 'left'}} >
          <Card.Link className="cardslink" href="/">New premium rate has been introduced</Card.Link>
            
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut 
            </Card.Text>
          </Card.Body>
            </Card>

            <Card className="singlecard">
          {/* <Card.Img className="cardimg" src="https://thumbs.dreamstime.com/z/car-insurance-automobile-toy-under-umbrella-pink-background-top-down-car-insurance-automobile-toy-under-umbrella-pink-169460613.jpg/100px160" /> */}
          
          <img alt="." style={{maxHeight: '12em',borderBottomLeftRadius:'1em', borderBottomRightRadius: '1em'}} src="https://thumbs.dreamstime.com/z/car-insurance-automobile-toy-under-umbrella-pink-background-top-down-car-insurance-automobile-toy-under-umbrella-pink-169460613.jpg" />
          
          <Card.Body style={{textAlign: 'left'}} >
          <Card.Link className="cardslink" href="/">New premium rate has been introduced</Card.Link>
            
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut 
            </Card.Text>
          </Card.Body>
            </Card>

        <Card className="singlecard">
          
          {/* <Card.Body> */}
          <ListGroup >
          <ListGroup.Item className="listitem" >
          <Card.Link className="cardslink" href="/">Recent News</Card.Link>
            </ListGroup.Item>

          <ListGroup.Item className="listitem" >
            <img alt="." style={{height: '50px', width: '70px', marginRight: '10px', borderRadius: '.25rem' }} src="https://thumbs.dreamstime.com/z/car-insurance-automobile-toy-under-umbrella-pink-background-top-down-car-insurance-automobile-toy-under-umbrella-pink-169460613.jpg" />
            <Card.Link className="cardslink" href="/">New premium rate has been introduced</Card.Link>
            </ListGroup.Item>

            <ListGroup.Item className="listitem" >
            <img alt="." style={{height: '50px', width: '70px', marginRight: '10px', borderRadius: '.25rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf2iMZdYIwnGe0g4NjW_yGE-LQWZGW5f65uDIphZMTDVgow7Y1&usqp=CAU" />
            <Card.Link className="cardslink" href="/">New premium rate has been introduced</Card.Link>
            </ListGroup.Item>

            <ListGroup.Item className="listitem" >
            <img alt="." style={{height: '50px', width: '70px', marginRight: '10px', borderRadius: '.25rem' }} src="https://thumbs.dreamstime.com/z/car-insurance-automobile-toy-under-umbrella-pink-background-top-down-car-insurance-automobile-toy-under-umbrella-pink-169460613.jpg" />
            <Card.Link className="cardslink" href="/">New premium rate has been introduced</Card.Link>
            </ListGroup.Item>

            <ListGroup.Item className="listitem" >
            <img alt="." style={{height: '50px', width: '70px', marginRight: '10px', borderRadius: '.25rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf2iMZdYIwnGe0g4NjW_yGE-LQWZGW5f65uDIphZMTDVgow7Y1&usqp=CAU/100px160" />
            <Card.Link className="cardslink" href="/">New premium rate has been introduced</Card.Link>
            </ListGroup.Item>

          </ListGroup>
          {/* </Card.Body> */}
         
        </Card>
      </CardDeck>
      <button className="viewall">View all</button>
      </div>
    );
};

export default News;