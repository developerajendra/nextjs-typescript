import {api, keyMapper} from '../../../pages/api';
// import {TYPE} from '../filters/types';
import {TESTIMONIAL_MODEL} from '../../../components/testimonialCarousel/model.testimonial';
 

/**
 * Sending the enquiry for doctor and hospital
 * @param API_URL 
 */
export const sendEnquiry = async (API_URL, payload)=> {
    console.log('payload', payload);
    let {name, email, message, id,isDoctor,file} = payload;

    let payloadData = { ENQUIRYID:id,FILE_DATA:file,MESSAGE:message,NAME:name ,ISDOCTOR:isDoctor,"EMAIL":email}	
    
    const response =  await api.fileUpload(API_URL, payloadData);
        
        console.log('response', response);
        
        
        return response;
}
 