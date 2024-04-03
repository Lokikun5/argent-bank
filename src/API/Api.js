import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

async function verifyUser(email, password) {
    try {
        const response = await apiClient.post('/user/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

async function getUserProfile(token) {

    try {
        const response = await apiClient.post('/user/profile', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

async function editProfile( firstName, lastName, token ){
    try {
        const response = await apiClient.put('/user/profile', {
            firstName,
            lastName

        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}


export { verifyUser, getUserProfile, editProfile };