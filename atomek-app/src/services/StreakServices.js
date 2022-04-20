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