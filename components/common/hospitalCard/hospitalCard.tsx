import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Link from 'next/link';

import {useRouter} from 'next/router';

function HospitalCard(props) {
    const router = useRouter();
    console.log('router.route', router.route);
    
    return (
            <Card style={{  flexDirection:'row', alignItems: 'flex-end',margin: '20px 0' }}>
                <Card.Img style={{flex:'1', maxWidth: '20%'}} variant="top" src="/images/profile.jpg" />
                <Card.Body style={{flex:'2'}}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link href={`/hospital/detail/[id]`} as="/hospital/detail/1" ><a href="#">Go somewhere</a></Link>
                </Card.Body>
            </Card>
    )
}

export default HospitalCard
