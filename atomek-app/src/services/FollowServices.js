import getConfigHeader from "../functions/getConfigHeader";
import { axiosBase as axios } from "./Config";

export const FollowGetUserFollows = async (id) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/users/${id}/follows`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const FollowAddUserFollow = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.post(`/users/${req._id}/follows`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const FollowRemoveUserFollow = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.delete(`/users/${req._id}/follows/${req.followUser}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}