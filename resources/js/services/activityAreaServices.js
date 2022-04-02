import axios from "axios";
import { ref } from "vue";

export default function useActivityAreas() {

    const activityAreas = ref([]);
    const activityArea = ref([]);
    const errorsActivy = ref('');
    const loading = ref(0);

    const getActivityAreas = async () => {
        errorsActivy.value = '';
        loading.value = 1;
        let response = await axios.get('/api/activityAreas',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        activityAreas.value = response.data.data;

        loading.value = 2;
    };

    const getActivityArea = async (id) => {
        errorsActivy.value = '';
        loading.value = 1;
        let response = await axios.get('/api/activityAreas/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        activityArea.value = response.data.data;
    };

    const createActivityArea = async (data) => {
        errorsActivy.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/activityAreas', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 0;
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsActivy.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateActivityArea = async (id, data) => {
        errorsActivy.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/activityAreas/' + id, data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                    errorsActivy.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyActivityArea = async (id) => {
        errorsActivy.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/activityAreas/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsActivy.value = 'Impossible de supprimer ce activityArea';
        }
    };

    return {
        activityAreas,
        activityArea,
        errorsActivy,
        loading,
        getActivityAreas,
        getActivityArea,
        createActivityArea,
        updateActivityArea,
        destroyActivityArea
    };
} 