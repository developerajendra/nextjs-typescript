
const API = {
    BASE_URL: 'http://nayabichar.com/api/',
    IMAGE_BASE_URL:{
        DOCTORS: '/images/dynamic-image/doctors/',
        TESTIMONIAL: '/images/dynamic-image/testimonial/',
        HOSPITALS: '/images/dynamic-image/hospitals/',
        FEATURED_HOSPITALS:  '/images/dynamic-image/featured-hospitals/',
    },
    COUNTRY_LIST: 'countrymaster',
    COUNTRY_LIST_BY_TREATMENT: 'countrymaster/',
    STATES_LIST_BY_COUNTRY: 'statemaster?countrycode=',
    TREATMENT_TYPE: 'medproviderspecility',
    TOP_STATES_BY_COUNTRY: 'statemaster?countrycode=',
    HOSPITALS_BY_COUNTRY: 'entitydetails/',
    DOCTORS_LIST: 'meddoctor/post',
    DOCTOR_DETAILS: 'meddoctor/',
    HOSPITAL_LIST: 'medprovider/post',
    HOSPITAL_DETAILS: 'medprovider/',
    HOSPITAL_SEARCH: 'medprovider/searchdata',
    COMPARE_HOSPITAL_PRODUCTS: 'medprovider/categoryids',
    COMPARE_DOCTOR_PRODUCTS: 'meddoctor/doctorsids',
    TESTIMONIAL: 'https://api.jsonbin.io/b/5f24715a6f8e4e3faf27d0b1',
    SEND_ENQUIRY: 'SEND_ENQUIRY_DETAILS/',
    COST_ESTIMATE_LIST: 'tblmstpackagedetails',
    COST_ESTIMATE_DETAIL: 'packagetreatmentdetails?data=',
    REVIEW_DETAILS: 'REVIEW_DETAILS',
    FEATURE_DETAILS:'featureddetails',
}

export default API;

