
import React, { useState, useEffect } from 'react'
import {Loader} from '../index';


const WriteRating = ({value, ratingType, getValues})=>{
    const rateValue = Math.floor(value);
    const tempArray = [1,2,3,4,5];
    const [stReview, setstReview] = useState(0);
    const [reviewState, setreviewState] = useState({[ratingType]:0})
    const [loader, setloader] = useState(false);
  
    const mouseHover = (e, index, ratingType)=>{
      // console.log('hover', ratingType);
      
      setreviewState({
        ...reviewState,
        [ratingType]:index+1
      })
      
      setstReview(index);
      
    }
  
    const clickList = ()=>{
      setloader(true);
      setTimeout(() => {
        setloader(false);
      }, 500);
    }
  
    useEffect(() => {
      getValues(reviewState);
    }, [reviewState]);
  
    
     
    
    return (<ul className="rating write-review" >
      {loader && <Loader/>} 
            {
             tempArray.map((data, index)=>{
                return   <li onClick={clickList} onMouseOver={(e)=>mouseHover(e, index, ratingType)} className={stReview < index ? "not-rated" : ''}><i className="icon-rated-star"></i> </li> 
            })  
        }         
    </ul>)
  }

  export default WriteRating;