import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PremiumIcons.css';

const PremiumIcons = () => {
    return (
        <Container   style={{  marginTop: '5rem' , maxWidth: '900px'}} >
             <Row>
    <Col xs={7} sm={5} md={4} lg={4}>
    <p style={{ backgroundColor: 'rgba(32, 97, 117,.3)' , color: 'rgba(32, 97, 117,1)', fontWeight: 'bold'}} className=" premium calculator"> <i  className="fa fa-calculator premiumfont "> </i> Premium Calculator </p>
    </Col>
    <Col xs={7} md={4} lg={4}>
    
    <p style={{ backgroundColor: 'rgba(184, 64, 158,.3)' , color: 'rgba(184, 64, 158,1)', fontWeight: 'bold'}} className=" premium policy"> <i  className="fa fa-id-badge premiumfont "> </i> Policy Information </p>
    
    </Col>
    <Col xs={7} md={4} lg={4}>
    
    <p style={{ backgroundColor: 'rgba(153, 0, 18,.3)' , color: 'rgba(153, 0, 18,1)', fontWeight: 'bold'}} className=" premium transaction"> <i  className="fa fa-archive premiumfont "> </i> My Transaction </p>
    
    </Col>
          </Row>

        </Container>
    );
};

export default PremiumIcons;