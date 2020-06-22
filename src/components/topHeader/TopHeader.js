import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div className="whole">
            <Row  style={{display: 'flex', justifyContent: 'space-evenly', width: '98%'}}>

                <Col lg={6}>
                <p><strong> Get Your Daily Essentials Right Here </strong></p>
                </Col>
                {/* <div> */}
                <Col   style= {{ display: 'flex', justifyContent: 'center' }}>
                <p style={{display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <i style={{fontSize: '1.5rem', padding: '0 .5rem 0 0'}} class="fa fa-mobile"></i>
                     <strong>Get App</strong>
                      </p>
                    <div style={{borderLeft: '2px solid black', height: '1rem', margin: '.3rem 0 0 1rem' }}> </div>  
                </Col>

                <Col   className="icondiv" style={{flex: '0 0 16.666667%', maxWidth: '12.666667%'}} >
                <p style={{display: 'flex', justifyContent: 'left', cursor: 'pointer',  }}>
    
                    <i style={{fontSize: '1.5rem', padding: '0 .5rem 0 0'}} class="fa fa-map-marker"></i>
                     <strong>Store & Events </strong>
                      </p>
                    <div style={{borderLeft: '2px solid black', height: '1rem', margin: '.3rem 0 0 1rem' }}> </div>  
                </Col>

                <Col  className="icondiv" style={{flex: '0 0 16.666667%', maxWidth: '8.666667%'}} >
                <p style={{display: 'flex', justifyContent: 'left', cursor: 'pointer' }}>
                    <i style={{fontSize: '1.5rem', padding: '0 .5rem 0 0'}} class="fa fa-gift"></i>
                     <strong>Gift Card</strong>
                      </p>
                    <div style={{borderLeft: '2px solid black', height: '1rem', margin: '.3rem 0 0 1rem' }}> </div>  
                </Col>

                <Col lg={2} className="icondiv" style={{}} >
                <p style={{display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <i style={{fontSize: '1.5rem', padding: '0 .5rem 0 0'}} class="fa fa-question-circle"></i>
                     <strong>Help</strong>
                      </p>
                    {/* <div style={{borderLeft: '2px solid black', height: '1rem', margin: '.3rem 0 0 1rem' }}> </div>   */}
                </Col>

                {/* </div> */}

            </Row>
        </div>
    );
};

export default TopHeader;