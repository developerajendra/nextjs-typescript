import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchHospitalList} from '../../store/reducers/productList/productList.action';
import {ProductCard, Loader} from '../common';
 

/**
 * API data treatment types from redux
 * Fetch the treatment types if it's not exist on redux store
 */
const fetchHospitalListData = ()=>{
    const dispatch = useDispatch();
    const {hospitalListData, hospitalListDataLoader} = useSelector(state => state.hospitalList)

    useEffect(() => {
        !hospitalListData && dispatch(fetchHospitalList(API.HOSPITAL_LIST))
    }, []);
    return {
        loader: hospitalListDataLoader,
        data:hospitalListData
    };
}
 

function HospitalList() {
    const hospitalListData = fetchHospitalListData();
    console.log('hospitalListData', hospitalListData);
    

    return (
        <div style={{position:'relative'}}>
           {hospitalListData?.loader && <Loader/>}
            {hospitalListData?.data?.map((data)=>{
                return <ProductCard data={data} isHospital={true} primaryButtonText="SEND ENQUIRY" outlineButtonText="LEARN MORE" buttonOutlineRoute="/hospital/hospitals/detail" data={data}  />
            })}
            
        </div>
    )
}

export default HospitalList
