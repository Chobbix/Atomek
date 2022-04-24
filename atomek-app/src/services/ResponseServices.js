import { axiosBase as axios } from "./Config";

export const ResponseCreate = async (req) => {
    try {
        const response = await axios.post(`/response`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const ResponseGetResponsesBySubscription = async (req) => {
    try {
        const response = await axios.get(`/response/${req}/subscription`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}