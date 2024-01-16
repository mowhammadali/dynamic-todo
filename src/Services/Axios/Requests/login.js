import api from "../Config/config";

export const loginUser = async (userData) => {
    const response = await api.post('/login' , JSON.stringify(userData));
    return response;
} 