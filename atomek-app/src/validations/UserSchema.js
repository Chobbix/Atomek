import * as yup from 'yup';

export const userSchema = yup.object().shape({
    username: yup.string().min(4).max(20).required(),
    name: yup.string().max(50).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
});