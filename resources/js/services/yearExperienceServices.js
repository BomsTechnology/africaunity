import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useYearExperiences() {

    const yearExperiences = ref([]);
    const yearExperience = ref([]);
    const errorsYE = ref('');
    const loading = ref(0);

    const getYearExperiences = async () => {
        errorsYE.value = '';
        loading.value = 1;
        let response = await axios.get('/api/yearExperiences',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        yearExperiences.value = response.data.data;

        loading.value = 2;
    };

    const getYearExperience = async (id) => {
        errorsYE.value = '';
        loading.value = 1;
        let response = await axios.get('/api/yearExperiences/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        yearExperience.value = response.data.data;
    };

    const createYearExperience = async (data) => {
        errorsYE.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/yearExperiences', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errorsYE)
                    errorsYE.value += e.response.data.errorsYE[key][0] + "\n";
            }
        }
    };

    const updateYearExperience = async (id, data) => {
        errorsYE.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/yearExperiences/' + id, data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errorsYE)
                errorsYE.value += e.response.data.errorsYE[key][0] + '\t\n';
            }
        }
        
    };

    const destroyYearExperience = async (id) => {
        errorsYE.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/yearExperiences/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            return true;
    } catch (e) {
        loading.value = 0;
            errorsYE.value = 'Impossible de supprimer ce yearExperience';
    }
    };

    return {
        yearExperiences,
        yearExperience,
        errorsYE,
        loading,
        getYearExperiences,
        getYearExperience,
        createYearExperience,
        updateYearExperience,
        destroyYearExperience
    };
} 