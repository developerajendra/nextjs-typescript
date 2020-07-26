import React from 'react'
import {Table} from 'react-bootstrap';
import {DropDown} from '../common';

function CostEstimate() {
    return (
        <div className="cost-estimate-wrapper">
            <div className="list-header">
                <span>EASY TO CHOOSE</span>
                <h2>Get to know the average expenditure incurred by patients for surgeries across cities</h2>
            </div>

            <div className="select-desease">
                <DropDown styleTypeDefault={true} defaultSelectText="Choose Treatment Name"/>
            </div>

            <section className="treatment-description">
                <h3>Treatment Description</h3>
                <p>It is a surgical removal of the vermiform appendix. Open appendectomy is the traditional method and the standard treatment for appendicitis. The surgeon makes an incision in the lower right abdomen, extracts the appendix through the incision, while avoiding spilling purulent material (pus) from the appendix.</p>
            </section>

            <section>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>CITY NAME</th>
                            <th>COST</th>
                            <th>Number of Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                        <tr>
                            <td>Ahmedabad</td>
                            <td>50000 INR</td>
                            <td>6 Days</td>
                        </tr>
                    </tbody>
                </Table>
            </section>

            </div>
    )
}

export default CostEstimate
