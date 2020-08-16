
const API = {
    BASE_URL: 'http://nayabichar.com/api/',
    IMAGE_BASE_URL:{
        DOCTORS: '/images/dynamic-image/doctors/',
        TESTIMONIAL: '/images/dynamic-image/testimonial/',
        HOSPITALS: '/images/dynamic-image/hospitals/',
    },
    COUNTRY_LIST: 'countrymaster',
    COUNTRY_LIST_BY_TREATMENT: 'countrymaster/',
    STATES_LIST_BY_COUNTRY: 'STATE_MASTER?countrycode=',
    TREATMENT_TYPE: 'medproviderspecility',
    TOP_STATES_BY_COUNTRY: 'STATE_MASTER?countrycode=',
    HOSPITALS_BY_COUNTRY: 'entitydetails/',
    DOCTORS_LIST: 'meddoctor',
    DOCTOR_DETAILS: 'meddoctor/',
    HOSPITAL_LIST: 'medprovider',
    HOSPITAL_DETAILS: 'MED_PROVIDER/',
    COMPARE_PRODUCTS: 'medprovider/categoryids',
    TESTIMONIAL: 'https://api.jsonbin.io/b/5f24715a6f8e4e3faf27d0b1',
    SEND_ENQUIRY: '5f24715a6f8e4e3faf27d0b1',
    COST_ESTIMATE_LIST: 'tblmstpackagedetails',
    COST_ESTIMATE_DETAIL: 'packagetreatmentdetails?data=',
}

export default API;

