import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Card} from "react-bootstrap";


import {bestSeller} from '../info';
import './BestSeller.css';

const BestSeller = () => {
  
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
        <div style={{width: '90%', margin: '3rem 3rem 0 1rem', }}>
        <h2 style={{margin: '0 0 3rem 4rem'}}> Bestsellers </h2>
        <p className="bestsellerview" style={{fontSize: '12px', float: 'right' }}><strong style={{padding: '5px '}}>VIEW ALL</strong><i  className="fa fa-angle-right"> </i></p>
        <Slider {...settings}>
        
            {bestSeller.map ((prop,i) => {  

            //  console.log(prop); 
          return(
          <Card  style={{ width: '9rem' }}>
           
            <Card.Body >
             
              <Card.Img  style={{height: '6rem'}} variant="top" src={bestSeller[i].img} />
              <Card.Text style={{textAlign: 'center'}}>
              <strong>{bestSeller[i].name}</strong>
              <p style={{fontSize: '10px', margin: '0'}}>{bestSeller[i].info}</p>
          <strong style={{fontSize: '10px',  }} >{bestSeller[i].price}</strong>
              </Card.Text>
            </Card.Body>
           
           
          </Card> 
          
          )
          
  }  )} 
          
         

        </Slider>
      </div>
    );
};

export default BestSeller;