import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useMinistries() {

    const ministries = ref([]);
    const ministry = ref([]);
    const errors = ref('');
    const loading = ref(0);

    const getMinistries = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/ministries',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        ministries.value = response.data.data;

        loading.value = 2;
    };

    const getMinistry = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/ministries/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        ministry.value = response.data.data;
    };

    const createMinistry = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/ministries', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.ministry.index' });
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateMinistry = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/ministries/' + id, ministry.value, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.ministry.index' });
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyMinistry = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/ministries/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == '500') {
            errors.value = 'Impossible de supprimer ce ministries';
        }
    }
    };

    return {
        ministries,
        ministry,
        errors,
        loading,
        getMinistries,
        getMinistry,
        createMinistry,
        updateMinistry,
        destroyMinistry
    };
} 