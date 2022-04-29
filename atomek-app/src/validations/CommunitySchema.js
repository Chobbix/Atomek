import * as yup from 'yup';

export const communitySchema = yup.object().shape({
    name: yup.string().required().min(4).max(30),
    description: yup.string().required(),
    _category: yup.string().required()
});