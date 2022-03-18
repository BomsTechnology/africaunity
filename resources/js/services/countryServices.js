import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useCountries() {

    const countries = ref([]);
    const country = ref([]);
    const errors = ref('');
    const loading = ref(0);

    const getCountries = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/countries',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        countries.value = response.data.data;

        loading.value = 2;
        console.log(countries.value);
    };

    const getCountry = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/countries/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 2;
        country.value = response.data.data;
    };

    const createCountry = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/countries', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.country.index' });
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateCountry = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/countries/' + id, country.value, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.country.index' });
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyCountry = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/countries/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == '500') {
            errors.value = 'Impossible de supprimer ce countries';
        }
    }
    };

    return {
        countries,
        country,
        errors,
        loading,
        getCountries,
        getCountry,
        createCountry,
        updateCountry,
        destroyCountry
    };
} 