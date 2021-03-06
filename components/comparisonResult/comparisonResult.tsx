import React,{useState, useEffect} from 'react'
import { Table, Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { useRouter } from 'next/router';

//Custom imports
import {API} from '../../pages/api';
import {fetchCompareProductList} from '../../store/reducers/productDetails/productDetails.action';
import {Breadcrumb, Loader} from '../../components/common';




/**
 * API data fetching from redux
 * Fetch the country list if it's not exist on redux store
 */
const fetchCompareProductListData = (dispatch, route)=>{
     const {compareProductListData, compareProductListLoader} = useSelector(state => state.compareProductList);
    const payload = route.query.doctor ? {"doctorsids": route.query.doctor } : {"categoryIds":route.query.hospital}
     

    useEffect(() => {
          dispatch(fetchCompareProductList(API.COMPARE_HOSPITAL_PRODUCTS, payload))
    }, [route.query]);
    return {
        loader: compareProductListLoader,
        data: compareProductListData || []
    };

}


function ComparisonResult() {
    const dispatch = useDispatch();
    const route = useRouter();
    const isDoctor = route?.query?.doctor ? true : false;

    //Settign the breadcrumbs based on route
    const productType = isDoctor ? {label:'Doctors', route:'/hospital/doctors'} : {label:'Hospitals', route:'/hospital/hospitals'};
    const breadCrumbConfig = [
        productType,
        {label:"Comparison Results"}
    ];

    

    
    
    const compareProductListData = fetchCompareProductListData(dispatch, route);
    
    
console.log(compareProductListData.data);

    return (
        isDoctor ? 
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
            {compareProductListData.loader && <Loader/>}
                <section className="table-wrapper">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                    <th>DOCTOR NAME</th>
                                    {
                                    compareProductListData?.data.map(list=>{
                                    return <th>{list.name}</th>
                                    })}
                                        
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ranking</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.ranking}</td>
                                })}
                            </tr>
                            
                           
                            <tr>
                                <td>No. Of Year Experience</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.experience}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Hospital Name</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.hospitalName}</td>
                                })}
                            </tr>
                            <tr>
                                <td> Work Experience</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.workExperience}</td>
                                })}
                            </tr>
                            <tr>
                                <td> Qulificaiton</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.qulification}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Specialization</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.specialization}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Education</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.education}</td>
                                })}
                            </tr>
                            <tr>
                                <td>List of Treatment</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.tratementLists}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Awards</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.awards}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Designation</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.designation}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Location</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.location}</td>
                                })}
                            </tr> 
                        </tbody>
                    </Table>
                </section>
            </section>
        </div> :
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
            {compareProductListData.loader && <Loader/>}
                <section className="table-wrapper">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                    <th>HOSPITAL NAME</th>
                                    {
                                    compareProductListData?.data.map(list=>{
                                    return <th>{list.hospitalName}</th>
                                    })}
                                        
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>No. Of Beds</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.numberOfBeds}</td>
                                })}
                            </tr>
                            
                           
                            <tr>
                                <td>No. Of ICU BEDS</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.numberOfICUBeds}</td>
                                })}
                            </tr>
                            <tr>
                                <td>NO OF OT ROOMS</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.numberOfRooms}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Year Of Established</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.yearofEstablish ? list.yearofEstablish : 'NA'}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Average InternationAL Patient</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.averageInternationalPatient}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Average Domestic Patient</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.averageDomesticPatient}</td>
                                })}
                            </tr>
                            <tr>
                                <td>FOOD</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.food ? list.food  : 'NA'}</td>
                                })}
                            </tr>
                            <tr>
                                <td>TREATMENT RELATED</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.treatment ? list.treatment : 'NA'}</td>
                                })}
                            </tr>
                            <tr>
                                <td>COMFORT DURING STAY</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.comortStay ? list.comortStay : 'NA'}</td>
                                })}
                            </tr>
                            <tr>
                                <td>PAYMENT MODE</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.paymentMode}</td>
                                })}
                            </tr>
                            <tr>
                                <td>TRANSPOTAION</td>
                                { compareProductListData?.data.map(list=>{
                                    return <td>{list.transportation}</td>
                                })}
                            </tr> 
                        </tbody>
                    </Table>
                </section>
            </section>
        </div>
    )
}

export default ComparisonResult
