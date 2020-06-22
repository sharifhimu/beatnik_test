import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Card} from "react-bootstrap";

import {diaries} from '../info';
import './Diaries.css';

const Diaries = () => {
   
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
        <div style={{width: '100%', margin: '0rem 0rem 3rem 0rem', }}>
        <h2 style={{margin: '0 0 3rem 0', }}> Diaries </h2>
        
       
        <Slider {...settings}>
        
            {diaries.map ((prop,i) => {  

            //  console.log(prop);

          return(
          <Card id={diaries[i].id} style={{ width: '0' }}>
           
            {/* <Card.Body> */}
             
              <Card.Img style={{height: '12rem'}} variant="top" src={diaries[i].img} />
          
              <Card.Text style={{textAlign: 'start'}}>
              <strong>{diaries[i].name}</strong>
              <p style={{fontSize: '10px', margin: '0'}}>{diaries[i].info}</p>
          
              </Card.Text>
            {/* </Card.Body> */}
           
           
          </Card> 
          
          )
          
  }  )} 
          
         

        </Slider>
      </div>
    );
};

export default Diaries;