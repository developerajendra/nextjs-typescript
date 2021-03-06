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
    
    const {hospitalListData, hospitalListDataLoader, filter} = useSelector(state => state.hospitalList)
    
    return {
        loader: hospitalListDataLoader,
        data:hospitalListData,
        filter
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
    const [loadMoreData, setloadMoreData] = useState([]);

    const loadMore = ()=>{
        const filters = {...hospitalListData.filter, offset:hospitalListData.filter.offset + hospitalListData.filter.limit}
        dispatch(fetchHospitalList(API.HOSPITAL_LIST, filters, 'LOAD_MORE'))
    }

    return (
        <div style={{position:'relative'}}>
           {hospitalListData?.loader && <Loader/>}
            {hospitalListData?.data?.length ? hospitalListData?.data?.map((data)=>{
                return <ProductCard dispatcher={dispatch} onproductCompareChange={onCheckedProduct} compareProduct={compareHospitals} data={data} isHospital={true} primaryButtonText="SEND ENQUIRY" outlineButtonText="LEARN MORE" buttonOutlineRoute="/hospital/hospitals/detail"   />
            }) : <h5 className="no-data">Data will available soon...</h5>}
           {hospitalListData?.data?.length && (hospitalListData?.filter?.totalCount > hospitalListData?.data?.length) ? <div style={{textAlign: 'center', padding: '10px 0 30px'}}>
           {hospitalListData?.loader && <Loader/>}
                <MedicalButton onButtonOutlineClick={(e)=>loadMore()} text="Load More" type="outline" />
            </div> : null}
        </div>
    )
}

export default HospitalList
