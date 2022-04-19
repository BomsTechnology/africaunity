import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useZones() {

    const zones = ref([]);
    const zone = ref([]);
    const errors = ref('');
    const loading = ref(0);

    const getZones = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/zones',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        zones.value = response.data.data;

        loading.value = 2;
    };

    const getZone = async (id) => {
        errors.value = '';
        loading.value = 1;
        try{
            let response = await axios.get('/api/zones/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 0;
            zone.value = response.data.data;
        }catch(e){
            return false;
        }
        
    };

    const createZone = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/zones', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.zone.index' });
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateZone = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/zones/' + id, zone.value, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.zone.index' });
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyZone = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/zones/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            return true;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == '500') {
            errors.value = 'Impossible de supprimer cette zone';
        }
    }
    };

    return {
        zones,
        zone,
        errors,
        loading,
        getZones,
        getZone,
        createZone,
        updateZone,
        destroyZone
    };
} 