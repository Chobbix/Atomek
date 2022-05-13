import * as yup from 'yup';

export const streakSchema = yup.object().shape({
    title: yup.string().lowercase().required().min(4).max(30),
    type: yup.string().lowercase().required(),
    _community: yup.string().required()
});

export const streakUpdateSchema = yup.object().shape({
    title: yup.string().lowercase().required().min(4).max(30)
});