import { axiosBase as axios } from "./Config";

export const CommunityCreate = async (req) => {
    try {
        const response = await axios.post(`/community`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}