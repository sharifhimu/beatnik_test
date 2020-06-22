import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import {Card, CardDeck} from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import carousel from '../image/carousel.png';
// import styled from  'styled-components';
import './Carousel.css';

const CarouselPart = () => {
    return (
      <div>
        {/* // <carouselWrapper> */}
        <Carousel autoPlay >
        <div>
          <img alt="slider1" src={carousel} />
         
        </div>
        <div>
          <img alt="slider2" src={carousel} />
         
        </div>
        <div>
          <img alt="slider3" src={carousel} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
       
      </Carousel>

       {/* <Container xs={5} > */}

        <Row  className="searchpad">
     
     
     <Col  sm={3} xs={3} lg={2}>
     <i className="fa fa-search search-icon"></i>
   
  </Col>

  <Col  sm={6} xs={7} lg={6}>
  {/* <p>What do you want?</p> */}
  <input className="input" type="text" placeholder="What do you want?" />
  </Col>
  
  <Col  className="threeiconbr" sm={3} xs={3} lg={3}>    
  <p className="threeicon"> <i className="fa threeicon fa-clipboard"></i><br/> Products </p>
  <p className="threeicon"> <i className="fa threeicon fa-user"></i><br/> Hospital </p>
  <p className="threeicon"> <i className="fa threeicon fa-map-marker"></i><br/> Branch </p>
 
  </Col>    
 
  </Row>   
   {/* </Container> */}
      {/* </carouselWrapper> */}
      </div>
    );
};



export default CarouselPart;