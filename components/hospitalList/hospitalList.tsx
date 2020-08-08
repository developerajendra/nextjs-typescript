import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchHospitalList, compareProduct} from '../../store/reducers/productList/productList.action';
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
 
const prodcuts = [];
const onCheckedProduct = (e, productID, dispatcher)=>{
    if(e.target.checked){
        !prodcuts.includes(productID) && prodcuts.push(productID);
    }else{
        const index = prodcuts.indexOf(productID);
        prodcuts.splice(index, 1);
    }
    dispatcher(compareProduct('HOSPITALS', prodcuts))
}

function HospitalList() {
    const hospitalListData = fetchHospitalListData();
    const {compareHospitals} = useSelector(state => state.compareProduct);
    const dispatch = useDispatch();
    

    return (
        <div style={{position:'relative'}}>
           {hospitalListData?.loader && <Loader/>}
            {hospitalListData?.data?.map((data)=>{
                return <ProductCard dispatcher={dispatch} onproductCompareChange={onCheckedProduct} compareProduct={compareHospitals} data={data} isHospital={true} primaryButtonText="SEND ENQUIRY" outlineButtonText="LEARN MORE" buttonOutlineRoute="/hospital/hospitals/detail"   />
            })}
            
        </div>
    )
}

export default HospitalList
