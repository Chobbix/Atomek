import getConfigHeader from "../functions/getConfigHeader";
import { axiosBase as axios } from "./Config";

export const TagCreate = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.post(`/users/${req._user}/tags`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const TagGetTagsByUser = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/users/${req}/tags`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}