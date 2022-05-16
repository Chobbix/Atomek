import getConfigHeader from "../functions/getConfigHeader";
import { axiosBase as axios } from "./Config";

export const ResponseCreate = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.post(`/response`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SetResponseImage = async (id, image) => {
    try {
        const config = getConfigHeader();
        const response = await axios.put(`/response/${id}/image`, image, {
            headers: {
                'Content-Type': image.type
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const ResponseGetResponsesBySubscription = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/response/${req}/subscription`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}