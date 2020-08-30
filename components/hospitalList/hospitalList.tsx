import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchHospitalList, compareProduct} from '../../store/reducers/productList/productList.action';
import {ProductCard, Loader, MedicalButton} from '../common';

/**
 * API data treatment types from redux
 * Fetch the treatment types if it's not exist on redux store
 */
const fetchHospitalListData = (dispatch, filters)=>{
    
    const {hospitalListData, hospitalListDataLoader} = useSelector(state => state.hospitalList)
    useEffect(() => {
        // !hospitalListData && dispatch(fetchHospitalList(API.HOSPITAL_LIST, filters))
    }, []);
    return {
        loader: hospitalListDataLoader,
        data:hospitalListData
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
    dispatcher(compareProduct('HOSPITALS', prodcuts))
}





const  HospitalList = ()=> {
    const dispatch = useDispatch();
    const {productFilters} = useSelector(state => state.productFitler);
    const hospitalListData = fetchHospitalListData(dispatch, productFilters);
    const {compareHospitals} = useSelector(state => state.compareProduct);

    const loadMore = (currentItems, totalItems)=>{
        
    }
    

    return (
        <div style={{position:'relative'}}>
           {hospitalListData?.loader && <Loader/>}
            {hospitalListData?.data?.length ? hospitalListData?.data?.map((data)=>{
                return <ProductCard dispatcher={dispatch} onproductCompareChange={onCheckedProduct} compareProduct={compareHospitals} data={data} isHospital={true} primaryButtonText="SEND ENQUIRY" outlineButtonText="LEARN MORE" buttonOutlineRoute="/hospital/hospitals/detail"   />
            }) : <h5 className="no-data">No data found...</h5>}
            {/* ccc{console.log('ddd',hospitalListData?.data[0])} */}
           {hospitalListData?.data?.length && (hospitalListData?.data[0]?.totalCount > hospitalListData?.data?.length) ? <div style={{textAlign: 'center', padding: '10px 0 30px'}}>
                <MedicalButton onButtonOutlineClick={(e)=>loadMore(hospitalListData?.data?.length, hospitalListData?.data[0]?.totalCount)} text="Load More" type="outline" />
            </div> : null}
        </div>
    )
}

export default HospitalList
