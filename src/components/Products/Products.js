import React from 'react';
import {Card, CardGroup, ListGroup, Button, Row} from 'react-bootstrap';
// import savings from './image/savings pic.png';
import './Products.css';

const Products = () => {
    return (

        <div className="cardbg">
            {/* <div classname="bgtext"> */}
        <h2 >Our <strong>Products</strong></h2>    
        <h5 style={{fontSize: '15px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing
             elit,sed do eiusmod. Lorem ipsum dolor sit amet,
              consectetur <br/>adipiscing elit,sed do eiusmod.</h5>
              {/* </div> */}
        <CardGroup className="products" style={{width: '80%', height: '', marginTop: '2rem' }}>
        <Card className="productlinks"> 
          
          <Card.Body>

          <ListGroup className="list-group-flush ">
          <Card.Link href="#ListGroup">Savings</Card.Link>
          <Card.Link href="#ListGroup">Early Cash</Card.Link>
          <Card.Link href="#ListGroup">Children</Card.Link>
          <Card.Link href="#ListGroup">Retirement</Card.Link>
                
               {/* <div className="hoverborder"></div> */}

          </ListGroup>  
            
          </Card.Body>
          
        </Card>

        <Card>
            
            <Card.Body>
                <Card.Title>Sanchay</Card.Title>
                <Card.Text>
                The easiest plan to focus on our convenience. <br/><br/> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod.
                </Card.Text>
                <p className="details" href="/">Details<i  className="fa fa-arrow-right "> </i> </p>
                {/* <Button >Details</Button> */}
                <Row>
                <Button >Calculate Premium</Button>
                <Button >Book an appointment</Button>
                </Row>
                <Row className="downarrowgrp">
                <i  className="fa fa-arrow-left downarrow "> </i>
                <i  className="fa fa-arrow-right downarrow"> </i>            
                </Row>
            </Card.Body>
        </Card>
        
        <Card className="cardimg">
          {/* <Card.Img  src={savings} /> */}
          
        </Card>
      </CardGroup>
      <button className="viewall">View all</button>
      </div>
    );
};

export default Products;