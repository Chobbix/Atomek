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