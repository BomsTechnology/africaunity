import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useUsers() {

    const users = ref([]);
    const user = ref([]);
    const errors = ref('');
    const loading = ref(0);

    const getUsers = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/users',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        users.value = response.data.data;

        loading.value = 2;
        // console.log(users.value);
    };

    const getUser = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/users/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        user.value = response.data.data;
    };

    const createUser = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/users', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.user.index' });
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateUser = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/users/' + id, user.value, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.user.index' });
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyUser = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/users/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            return true;
    } catch (e) {
        loading.value = 0;
            errors.value = 'Impossible de supprimer ce user';
    }
    };

    return {
        users,
        user,
        errors,
        loading,
        getUsers,
        getUser,
        createUser,
        updateUser,
        destroyUser
    };
} 