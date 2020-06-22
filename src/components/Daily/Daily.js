import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Card} from "react-bootstrap";


import {daily} from '../info';
import './Daily.css';

const Daily = () => {
    
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
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
            <div style={{width: '100%', margin: '3rem 0 4rem 0', }}>
            <h2 className="dailytitle" > DAILY ESSENTIALS </h2>
            
            <Slider {...settings}>
            
                {daily.map ((prop,i) => {  
    
                //  console.log(prop); 
              return(
                  <div>
              <Card id={daily[i].id} style={{ width: '10rem', }}>
               
               <Card.Img  style={{ height: '12rem' }} src={daily[i].img} alt="Card image" />
                <Card.ImgOverlay>
              <Card.Title className="titlestyle">{daily[i].name}<br/><br/><br/><br/><br/> </Card.Title>
                    {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
                {/* <Card.Title className="titlestyle">{daily[i].name}</Card.Title> */}
                <Card.Text className="seemore" style={{zIndex: '1', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>See more <i  className="fa fa-angle-right"> </i> </Card.Text> 
              </Card> 
              
              </div>
              )
              
      }  )} 
              
             
    
            </Slider>
          </div>
        );

};

export default Daily;