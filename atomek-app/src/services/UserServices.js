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

export const Update = async (data, id) => {
    try {
        const response = await axios.put(`/users/${id}`, data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const SetUserImage = async (id, image) => {
    try {
        const response = await axios.put(`/users/${id}/image`, image, {
            headers: {
                'Content-Type': image.type
            }
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}