import getConfigHeader from "../functions/getConfigHeader";
import { axiosBase as axios } from "./Config";

export const CommunityCreate = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.post(`/community`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const CommunityUpdate = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.put(`/community/${req._id}`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const communityAddUser = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.put(`/community/${req.communityId}/add-user`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const CommunityGetComunityById = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/community/${req}`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const communityGetComunitiesByUser = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/users/${req._id}/communities`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const CommunityGetComunitiesDiscover = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/users/${req._id}/communities-discover`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}