import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useJobOffers() {

    const jobOffers = ref([]);
    const jobOffer = ref([]);
    const errors = ref('');
    const loading = ref(0);


    const getJobOffers = async () => {
        errors.value = '';
        try{
            loading.value = 1;
            let response = await axios.get('/api/jobOffers/',  {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            jobOffers.value = response.data.data;
            loading.value = 2;
        }catch(e){
            if(e.response.status == 401){
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const getJobOffersFront = async () => {
        errors.value = '';
        try{
            loading.value = 1;
            let response = await axios.get('/api/jobOffers-front/',  {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            jobOffers.value = response.data.data;
            loading.value = 2;
        }catch(e){
            if(e.response.status == 401){
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const filterJobs = async (data) => {  
        errors.value = '';
        try{
            loading.value = 1;
            let response = await axios.post('/api/jobOffers-filter', data,  {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            jobOffers.value = response.data.data;
            console.log(jobOffers.value);
            loading.value = 2;
        }catch(e){
            if(e.response.status == 401){
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const getJobOffersUser = async (id) => {
        errors.value = '';
        try{
            loading.value = 1;
            let response = await axios.get('/api/jobOffers-user/' + id,  {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            jobOffers.value = response.data.data;

            loading.value = 2;
        }catch(e){
            if(e.response.status == 401){
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
        
    };


    const getJobOffer = async (id) => {
        errors.value = '';
        try{
            loading.value = 1;
            let response = await axios.get('/api/jobOffers/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 0;
            jobOffer.value = response.data.data;
        }catch(e){
            if(e.response.status == 401){
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const getJobOffer2 = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/jobOffers2/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        jobOffer.value = response.data.data;
        console.log(jobOffer.value)
    };

    const createJobOffer = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/jobOffers', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`,
                    'Content-Type' : 'multipart/form-data',
                }
            });
            loading.value = 2;
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateJobOffer = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/jobOffers/' + jobOffer.value.id, data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`,
                    'Content-Type' : 'multipart/form-data',
                }
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyJobOffer = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/jobOffers/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == '500') {
                errors.value = 'Impossible de supprimer ce jobOffer';
            }
        }
    };

    const markFilled = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.get('/api/jobOffers-mark-filled/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == '500') {
                errors.value = 'Impossible de supprimer ce jobOffer';
            }
        }
    };

    return {
        jobOffers,
        jobOffer,
        errors,
        loading,
        filterJobs,
        getJobOffers,
        getJobOffer,
        createJobOffer,
        updateJobOffer,
        destroyJobOffer,
        getJobOffersUser,
        getJobOffer2,
        markFilled,
        getJobOffersFront,
    };
} 