import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useAnnouncements() {

    const announcements = ref([]);
    const announcement = ref([]);
    const errors = ref('');
    const loading = ref(0);


    const getAnnouncements = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/announcements/',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        announcements.value = response.data.data;

        loading.value = 2;
    };

    const getAnnouncementsUser = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/announcements-user/' + id,  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        announcements.value = response.data.data;

        loading.value = 2;
        
    };

    const getAnnouncementsUniversity = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/announcements-university/' + id,  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        announcements.value = response.data.data;

        loading.value = 2;
        
    };


    const getAnnouncement = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/announcements/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        announcement.value = response.data.data;
    };

    const getAnnouncement2 = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/announcements2/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        announcement.value = response.data.data;
    };

    const createAnnouncement = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/announcements', data, {
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

    const updateAnnouncement = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/announcements/' + announcement.value.id, data, {
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

    const destroyAnnouncement = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/announcements/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == '500') {
            errors.value = 'Impossible de supprimer ce announcement';
        }
    }
    };

    return {
        announcements,
        announcement,
        errors,
        loading,
        getAnnouncements,
        getAnnouncement,
        createAnnouncement,
        updateAnnouncement,
        destroyAnnouncement,
        getAnnouncementsUser,
        getAnnouncementsUniversity,
        getAnnouncement2
    };
} 