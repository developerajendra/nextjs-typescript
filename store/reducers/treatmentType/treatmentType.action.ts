import api from '../../../pages/api/api';

export const fetchTreatmentTypes = async (API_URL)=>{
    const response = await api.get(API_URL)
    const treatmentType = response.map(list=>{
        return {value:list,label:list}
    })
    
    return treatmentType;
}