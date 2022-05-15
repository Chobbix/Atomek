import * as yup from 'yup';

export const postSchema = yup.object().shape({
    body: yup.string().required().max(600),
    _communityId: yup.string().required(),
    _streakId: yup.string()
});

export const postCommunitySchema = yup.object().shape({
    body: yup.string().required().max(600),
    _streakId: yup.string()
});