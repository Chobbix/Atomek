import getConfigHeader from "../functions/getConfigHeader";
import { axiosBase as axios } from "./Config";

export const StreakCreate = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.post(`/streak`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakUpdate = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.put(`/streak/${req._id}`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakDelete = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.delete(`/streak/${req._id}`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakGetById = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/streak/${req}`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakGetByCommunity = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/community/${req}/streaks`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakGetByCommunityIfUserIsSubscribed = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/community/${req._community}/user/${req._user}/is-subscribed`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}