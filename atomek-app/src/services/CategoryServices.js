import getConfigHeader from "../functions/getConfigHeader";
import { axiosBase as axios } from "./Config";

export const CategoryCreate = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.post(`/category`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const CategoryGetAll = async () => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/category`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}