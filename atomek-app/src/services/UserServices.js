import { axiosBase as axios } from "./Config";

export const GetById = async (id) => {
    try {
        const response = await axios.get(`/users/${id}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const Login = async (req) => {
    try {
        const response = await axios.post(`/login`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const Create = async (req) => {
    try {
        const response = await axios.post(`/users`, req);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}