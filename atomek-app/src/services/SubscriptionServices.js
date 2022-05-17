import getConfigHeader from "../functions/getConfigHeader";
import { axiosBase as axios } from "./Config";

export const SubscriptionCreate = async (req) => {
    console.log(req);
    try {
        const config = getConfigHeader();
        const response = await axios.post(`/streak/${req._streak}/subscription`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionUpdate = async (req) => {
    console.log(req);
    try {
        const config = getConfigHeader();
        const response = await axios.put(`/subscription/${req._id}`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionDelete = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.delete(`/subscription/${req._id}`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionGetByStreakAndUser = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/streak/${req._streak}/subscription/${req._user}/users`, req, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionGetById = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/subscription/${req}`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionIncreaseCounter = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.put(`/subscription/${req._id}/increase-counter`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionGetSubscriptionsByUser = async (req) => {
    try {
        const config = getConfigHeader();
        const response = await axios.get(`/users/${req}/subscriptions`, config);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}