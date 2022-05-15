import { axiosBase as axios } from "./Config";

export const StreakCreate = async (req) => {
    try {
        const response = await axios.post(`/streak`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakUpdate = async (req) => {
    try {
        const response = await axios.put(`/streak/${req._id}`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakDelete = async (req) => {
    try {
        const response = await axios.delete(`/streak/${req._id}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakGetById = async (req) => {
    try {
        const response = await axios.get(`/streak/${req}`,);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakGetByCommunity = async (req) => {
    try {
        const response = await axios.get(`/community/${req}/streaks`,);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const StreakGetByCommunityIfUserIsSubscribed = async (req) => {
    try {
        const response = await axios.get(`/community/${req._community}/user/${req._user}/is-subscribed`,);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}