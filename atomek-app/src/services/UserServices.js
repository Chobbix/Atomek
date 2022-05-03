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

export const GetUserStats = async (id) => {
    try {
        const likes = await axios.get(`/users/${id}/amount-likes`);
        const communities = await axios.get(`/users/${id}/amount-communities`);
        const posts = await axios.get(`/users/${id}/amount-posts`);
        const subscriptions = await axios.get(`/users/${id}/amount-subscriptions`);

        const response = Object.assign(likes.data, communities.data, posts.data, subscriptions.data);

        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}