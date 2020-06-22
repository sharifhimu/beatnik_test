import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './BackTotop.css';

import map from '../image/map.png';

const BackTotop = () => {

    const scrollTotop = () => window.scrollTo({top: 0, behavior: "smooth"});

   

    return (
        <div style={{padding: '3rem 0 0 0'}}>
       <Container>
           <Row>
               <Col xs={10} lg style={{display: 'flex', textAlign: 'left', padding: '0 0 1rem 1rem'}}>
               <i className="fa fa-tag btoticon" style={{ transform: 'scaleX(-1)' }}></i>
                <p style={{fontSize: '.8rem' }}><strong>1500+ BRANDS </strong> <br/> Well Curated + Products</p>
                    
               </Col>

               <Col xs={10} lg style={{display: 'flex', textAlign: 'left', padding: '0 0 1rem 1rem'}}>
               <i className="fa fa-truck btoticon" style={{ transform: 'scaleX(-1)' }}></i>
                <p style={{fontSize: '.8rem' }}><strong>FREE SHIPPING </strong> <br/> For Orders Above INR 1000</p>
                    
               </Col>

               <Col xs={10} lg style={{display: 'flex', textAlign: 'left', padding: '0 0 1rem 1rem'}}>
               <i className="fa fa-gift btoticon" style={{ transform: 'scaleX(-1)' }}></i>
                <p style={{fontSize: '.8rem' }}><strong>GENUINE PRODUCTS </strong> <br/>Sourced Directly From Brands</p>
                    
               </Col>

               <Col xs={10} lg style={{display: '', textAlign: 'left',padding: '0 0 1rem 2rem'}}>
                <Row>
                    <p style={{fontSize: '.8rem' }}><strong>SHOW US SOME LOVE <i class="fa fa-heart" style={{color: 'rgba(255,8,127,1)'}}></i> ON SOCIAL MEDIA</strong></p>
                </Row>

                <Row>
                    <a href="/" >
                    <i className="fa fa-instagram socialicon"  />
                    </a>
                    <a href="/" >
                    <i className="fa fa-facebook socialicon"  />
                    </a>
                    <a href="/" >
                    <i className="fa fa-youtube socialicon"  />
                    </a>

                    <a href="/" >
                    <i className="fa fa-twitter socialicon"  />
                    </a>

                    <a href="/" >
                    <i className="fa fa-pinterest socialicon"  />
                    </a>
                    
                </Row>

               </Col>

           </Row>
       </Container>

        <div style={{backgroundColor: '#2c302e', borderTopLeftRadius: '4rem',borderTopRightRadius: '4rem' ,display: 'grid', justifyContent: 'center', padding: '0 0 0 0'}}>
       
            <Row className="btotopbtn" onClick={scrollTotop} style={{ width: '8rem', margin: '0 0 0 39rem', backgroundColor: 'rgba(255,8,127,1)', cursor: 'pointer', }}>
                
                  
                <p className=""  style={{ padding: '.5rem 0 0 .5rem', cursor: 'pointer'}}>  <strong> <i className="fa fa-arrow-up " /> Back to top </strong> </p>


                
            </Row>

            <Row className="storefont" style={{margin: '1rem 0 0 38rem'}}>
                <h3 style={{color: 'white', fontWeight: '600'}}>Store Locator</h3>
            </Row>

            <Row className="mapimg" style={{margin: '1rem 0 0 28rem'}}>
                <img alt="." style={{ width: '50%'}} src={map} />
            </Row>
            
            <Row className="copyrightline" style={{margin: '0 0 0 4rem'}}>
            <hr style={{ height: '.1rem', width: '20rem' ,borderColor: 'rgba(255,255,255,.5)', }} />
            </Row>

            <Row className="copyright" style={{margin: '0 0 0 36rem'}}>
                
                <p style={{color: 'rgba(255,255,255,.5)', fontSize: '.8rem' }}>Copyright &copy; all rights reserved by Sharif_Himu</p>
            </Row>

        </div>

       </div>
    );
};

export default BackTotop;