import * as yup from 'yup';

export const tagSchema = yup.object().shape({
    title: yup.string().lowercase().required().max(20)
});