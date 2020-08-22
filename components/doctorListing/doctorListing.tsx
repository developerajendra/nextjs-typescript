import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchDoctorsList, compareProduct} from '../../store/reducers/productList/productList.action';
import {ProductCard, Loader} from '../common';
 

/**
 * API data treatment types from redux
 * Fetch the treatment types if it's not exist on redux store
 */
const fetchDoctorListData = ()=>{
    const dispatch = useDispatch();
    const {doctorListData, doctorListDataLoader} = useSelector(state => state.doctorList)

    useEffect(() => {
        // !doctorListData && dispatch(fetchDoctorsList(API.DOCTORS_LIST))
    }, []);
    return {
        loader: doctorListDataLoader,
        data:doctorListData
    };
}




 
const prodcuts = [];
/**
 * Product compare
 * @param e 
 * @param productID 
 * @param dispatcher 
 */
const onCheckedProduct = (e, productID, dispatcher)=>{
    if(e.target.checked){
        !prodcuts.includes(productID) && prodcuts.push(productID);
    }else{
        const index = prodcuts.indexOf(productID);
        prodcuts.splice(index, 1);
    }
    dispatcher(compareProduct('DOCTORS', prodcuts))
}



 

function DoctorListing() {
    const dispatch = useDispatch();
    const tratmentTypeData = fetchDoctorListData();
    const {compareDoctors} = useSelector(state => state.compareProduct);

    return (
        <div style={{position:'relative'}}>
           {tratmentTypeData?.loader && <Loader/>}
            {tratmentTypeData?.data ? tratmentTypeData?.data?.map((data)=>{
                return <ProductCard   dispatcher={dispatch} onproductCompareChange={onCheckedProduct} compareProduct={compareDoctors}  primaryButtonText="SEND ENQUIRY" outlineButtonText="LEARN MORE" buttonOutlineRoute="/hospital/doctors/detail" data={data} />
            }) :  <h5 className="no-data">No data found.</h5>}
            
        </div>
    )
}

export default DoctorListing


 
