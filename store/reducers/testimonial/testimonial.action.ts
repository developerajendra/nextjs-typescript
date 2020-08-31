import {api, keyMapper} from '../../../pages/api';
// import {TYPE} from '../filters/types';
import {TESTIMONIAL_MODEL} from '../../../components/testimonialCarousel/model.testimonial';
 

/**
 * fetching the testimonial based on country and states
 * @param API_URL 
 */
export const fetchTestimonial = async (API_URL, payload)=> {
    const response =  await api.get(API_URL);
    keyMapper(response, TESTIMONIAL_MODEL);
    return response;
}
 