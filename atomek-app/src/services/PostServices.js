import { axiosBase as axios } from "./Config";

export const PostCreate = async (req) => {
    try {
        const response = await axios.post(`/community/${req._community}/posts`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const PostUpdate = async (req) => {
    try {
        const response = await axios.put(`/posts/${req._id}`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const PostDelete = async (req) => {
    try {
        const response = await axios.delete(`/posts/${req._id}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const PostUpdateImage = async (id, image) => {
    try {
        const response = await axios.put(`/posts/${id}/image`, image, {
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

export const PostGetPostsByUser = async (req) => {
    try {
        const response = await axios.get(`/users/${req}/posts`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const PostGetPostsByUserCommunities = async (req) => {
    try {
        const response = await axios.get(`/users/${req}/communities-posts`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const PostGetPostsByCommunity = async (req) => {
    try {
        const response = await axios.get(`/community/${req}/posts`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}