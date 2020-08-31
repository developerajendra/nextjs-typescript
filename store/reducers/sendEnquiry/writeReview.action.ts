import {api, keyMapper} from '../../../pages/api';
// import {TYPE} from '../filters/types';
import {TESTIMONIAL_MODEL} from '../../../components/testimonialCarousel/model.testimonial';
 

/**
 * Sending the enquiry for doctor and hospital
 * @param API_URL 
 */
export const writeReview = async (API_URL, payload)=> {
    console.log('payload', payload);
    let {agree, name,  title, message, id, file, rating} = payload;
    let rateValue = Object.values(rating);

    let payloadData = {AGREE:agree, Title:title,FileName:"/dummy/file", Message:message, Name:name,Rating:rateValue, MedProviderId: id}
    const response =  await api.fileUpload(API_URL+'/post', payloadData);
    return response;
}
 