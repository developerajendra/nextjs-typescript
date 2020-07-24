import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {Navigation} from '../common';

const footerNavigation = [
    {name:'Hospitals',route:'/hospital/hospitals'},
    {name:'Ayurveda',route:'/ayurveda'},
    {name:'Cost Estimates',route:'/cost-estimates'},
    {name:'Patient Story',route:'/patient-story'},
    {name:'Knowledges Bank',route:'/knowledge-bank'},
];

function Footer() {
    return (
        <div className="footer-wrapper">
            <Row className="primary-footer"> 
                <i className="icon-footer-bgk-one"></i>
                <Col lg={4}>
                    <img className="logo" src="/images/logo-footer.jpg" alt="karevel.com" title="karevel.com" />
                    <div className="content">
                        <h5>RECOGNIZED BY MINISTRY OF TOURISM</h5>
                        <p>- GOVERNMENT OF INDIA</p>
                    </div>
                </Col>
                <Col lg={2}>
                    <h6>Product</h6>
                    <Navigation navItems={footerNavigation} />
                </Col>
                <Col lg={3} className="reach-us">
                    <h6>Reach Us</h6>
                    
                    <address><span>-</span>A-307, Third Floor, Unitech Business Zone, Sector 50,Gurugram.</address>
                </Col>
                <Col lg={3}>
                    <h6>Get in Touch</h6>
                    <ul className="social"> 
                        <li><i className="icon-facebook"></i></li>
                        <li><i className="icon-twitter"></i></li>
                        <li><i className="icon-youtube"></i></li>
                    </ul>
                    <div className="call">
                        <i className="icon-phone-call"></i>
                        <span>+91-124-4576760</span>
                    </div>
                    <div className="email">
                        <i className="icon-email"></i>
                        <span>info@eexpedise.com</span>
                    </div>
                </Col>
                <i className="icon-footer-bgk-two"></i>
            </Row>
            <Row className="secondary-footer"> 
                <p>Copyright © 2020 Karevel.com | Your Medical Travel Partner</p>
            </Row>
            
        </div>
    )
}

export default Footer
