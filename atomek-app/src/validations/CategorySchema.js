import * as yup from 'yup';

export const categorySchema = yup.object().shape({
    title: yup.string().lowercase().required().min(4).max(15)
});