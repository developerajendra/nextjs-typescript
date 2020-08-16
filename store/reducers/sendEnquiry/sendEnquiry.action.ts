import {api, keyMapper} from '../../../pages/api';
// import {TYPE} from '../filters/types';
import {TESTIMONIAL_MODEL} from '../../../components/testimonialCarousel/model.testimonial';
 

/**
 * Sending the enquiry for doctor and hospital
 * @param API_URL 
 */
export const sendEnquiry = async (API_URL, payload)=> {
    console.log('payload', payload);
    
    const response =  await api.get(API_URL, payload);
        
        console.log('response', response);
        
        
        return response;
}
 