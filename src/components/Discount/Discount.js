import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './Discount.css';

const Discount = () => {
    return (
        <div style={{backgroundColor: '#2c302e', padding: '5rem 0 4rem 2rem',  }}>
       <Container >
            <Row>
                <Col xs={8} md={4} lg={5} style={{padding: '0 0 3rem 0'}}> 
                <Row style={{color: 'white',  }}>
                <i className="fa fa-envelope" style={{fontSize: '1.5rem', padding: '0 5px 0 5px'}}></i>
                    <p style={{ }}><strong> GET SPECIAL DISCOUNT IN YOUR INBOX </strong></p>
                </Row>
                <Row>
                <input className="emailinput" type='email' placeholder='Enter your email id' />
                <button>SEND</button>
                </Row>
                <Row style={{color: 'red'}}>
                    Please enter a valid email
                </Row>
                </Col>

                <Col xs={10} md={4} lg={4} style={{padding: '0 0 3rem 0'}}>
                
                <Row style={{color: 'white',  }}>
                <i className="fa fa-mobile" style={{fontSize: '1.5rem', padding: '0 9px 0 5px'}}></i>
                    <p style={{ }}>EXPERIENCE THE NYKAA MOBILE APP  </p>
                </Row>
                <Row style={{}}>
                <a href="/" >
                    <img alt="." style={{width: '12rem', margin: '-20px 0 0 -0px'}} src="https://webstockreview.net/images/google-play-button-png-6.png" />
                    <img alt="." style={{width: '7rem', margin: '-20px 0 0 0'}} src="https://lh3.googleusercontent.com/proxy/-fluHJCnPk6W9YJrDvagBl2T_u3IpuYH6gIMJC3RLU5ilsRVOm-F-eXA6jYiG_EABTnH00KEkIYZ_VELP1Qs05XpNIw5c2fd0D0GLsgFnEGvwP6l0G0" />
                    
                </a>
                </Row>

                </Col>
                <Col  xs={10} md={4} lg={3}>
                    
                    <Row style={{color: 'white', textAlign: 'left' }}>
                    <i className="fa fa-phone" style={{fontSize: '1.5rem', padding: '0 9px 0 5px'}}></i>
                        <p style={{ }}>FOR ANY HELP YOU CAN CALL US <br/> <strong> +91 922-220-1010 </strong>  <br/> <br/> (Monday to Saturday, 9AM-9PM)</p>
                    </Row>
                   

                </Col>
            </Row>
       </Container>
       </div>
    );
};

export default Discount;