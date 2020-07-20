import React from 'react'
import {
    Card, 
    Button, 
    Tabs,
    Tab, 
    Row,
    Col
} from 'react-bootstrap';

function HospitalDetails() {
    return (
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/profile.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                    Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                </Tab>
            </Tabs>
            </Col>
        </Row>
    )
}

export default HospitalDetails
