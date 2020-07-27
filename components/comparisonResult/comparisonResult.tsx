import React from 'react'
import {
    Table, 
    Button, 
    Tabs,
    Tab, 
    Row,
    Col
} from 'react-bootstrap';
import {
    Breadcrumb,
} from '../../components/common';

function ComparisonResult() {
    const breadCrumbConfig = [
        {label:'Hospitals', route:'/hospital/hospitals'},
        {label:"Comparison Results"}
    ];

    return (
        <div className="comparisionn-result-wrapper">
           <Row className="product-detail-header">
                <Col lg={10}>
                    <div>
                        <Breadcrumb breadcrumbConfig={breadCrumbConfig}/>
                        <h2>Comparison Results</h2>
                    </div>
                </Col>
            </Row>

            <section  className="home-section background">
                <section className="table-wrapper">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>HOSPITAL NAME</th>
                                <th>HCG Multi Specialty Hospital and HCG Cancer Centre</th>
                                <th>NARAYANA MULTI SPECIALITY HOSPITAL</th>
                                <th>HOSPITAL NAME</th>
                                <th>HCG Multi Specialty Hospital and HCG Cancer Centre</th>
                                <th>NARAYANA MULTI SPECIALITY HOSPITAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>No. Of Beds</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>No. Of ICU BEDS</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>NO OF OT ROOMS</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>Year Of Established</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>Average InternationAL Patient</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>Average Domestic Patient</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>FOOD</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>TREATMENT RELATED</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>COMFORT DURING STAY</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>PAYMENT MODE</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                            <tr>
                                <td>TRANSPOTAION</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>50000 INR</td>
                                <td>6 Days</td>
                                <td>6 Days</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </section>
        </div>
    )
}

export default ComparisonResult
