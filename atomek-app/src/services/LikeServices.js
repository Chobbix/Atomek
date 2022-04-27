import { axiosBase as axios } from "./Config";

export const LikeGetPostLikes = async (req, negate = false) => {
    try {
        const response = await axios.get(`/posts/${req._post}/likes`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const LikeAdd = async (req) => {
    try {
        const response = await axios.post(`/posts/${req._post}/likes`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const LikeDelete = async (req) => {
    try {
        const response = await axios.delete(`/posts/${req._post}/likes/${req._user}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}