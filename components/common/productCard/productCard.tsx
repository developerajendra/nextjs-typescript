import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Link from 'next/link';

import {useRouter} from 'next/router';

function ProductCard({data}) {
    return (
            <Card style={{  flexDirection:'row', alignItems: 'flex-end',margin: '20px 0' }}>
                <Card.Img style={{flex:'1', maxWidth: '20%'}} variant="top" src="/images/profile.jpg" />
                <Card.Body style={{flex:'2'}}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link href={`${data.routes}/[id]`} as={`${data.routes}/${data.routesID}`}><a href="#">{data.buttonText}</a></Link>
                </Card.Body>
            </Card>
    )
}

export default ProductCard
