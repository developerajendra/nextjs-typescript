import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchDoctorsList} from '../../store/reducers/productList/productList.action';
import {ProductCard, Loader} from '../common';
 

/**
 * API data treatment types from redux
 * Fetch the treatment types if it's not exist on redux store
 */
const fetchDoctorListData = ()=>{
    const dispatch = useDispatch();
    const {doctorListData, doctorListDataLoader} = useSelector(state => state.doctorList)

    useEffect(() => {
        !doctorListData && dispatch(fetchDoctorsList(API.DOCTORS_LIST))
    }, []);
    return {
        loader: doctorListDataLoader,
        data:doctorListData
    };
}

 

function DoctorListing() {
    const tratmentTypeData = fetchDoctorListData();
    

    return (
        <div style={{position:'relative'}}>
           {tratmentTypeData?.loader && <Loader/>}
            {tratmentTypeData?.data?.map((data)=>{
                return <Produc tCard   primaryButtonText="SEND ENQUIRY" outlineButtonText="LEARN MORE" buttonOutlineRoute="/hospital/doctors/detail" data={data} />
            })}
            
        </div>
    )
}

export default DoctorListing


 
