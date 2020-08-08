import React,{useEffect, useState} from 'react'
import {Table} from 'react-bootstrap';
import {SelectBox, Loader} from '../common';
import {fetchCostEstimatesList, fetchCostEstimatesDetail} from '../../store/reducers/filters/filters.action';
import {API} from '../../pages/api';

function CostEstimate() {
    const [loader, setloader] = useState(false);
    const [dataloader, setDataloader] = useState(false);
    const [costEstimateList, setcostEstimateList] = useState([]);
    const [costEstimate, setcostEstimate] = useState([]);

    useEffect(() => {
        setloader(true);
        fetchCostEstimatesList(API.COST_ESTIMATE_LIST).then(data=>{
            setcostEstimateList(data);
            let payload = {value:data[0].packageId}
            onSelectPackage(payload);
            setloader(false);
        });
    }, []);

    const onSelectPackage = (value)=>{
        setDataloader(true);
        
        fetchCostEstimatesDetail(API.COST_ESTIMATE_DETAIL, value.value).then(data=>{
            setcostEstimate(data);
            setDataloader(false);
        });
    }
    

    return (
        <div className="cost-estimate-wrapper">
            <div className="list-header">
                <span>EASY TO CHOOSE</span>
                <h2>Get to know the average expenditure incurred by patients for surgeries across cities</h2>
            </div>

            <div className="select-desease">
                {loader && <Loader/>}
                  {costEstimateList.length ? <SelectBox selectedValue={costEstimateList[0]} styleTypeDefault={true} placeholder="Choose Treatment Name" options={costEstimateList} onSelect={onSelectPackage}/> : null}
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
                    {dataloader && <Loader/>}
                        {
                            costEstimate?.map((data)=>{
                                const cost = data?.averageCost;
                                
                                return <tr>
                                    <td>{data.cityName}</td>
                                    <td>{cost.toLocaleString()} INR</td>
                                    <td>{data.numberOfDays} Days</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </section>

            </div>
    )
}

export default CostEstimate
