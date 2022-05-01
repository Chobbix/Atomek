import * as yup from 'yup';

export const userUpdateSchema = yup.object().shape({
    username: yup.string().min(4).max(20).required(),
    name: yup.string().max(50).required(),
    password: yup
        .string()
        .optional()
        .when('password', {
            is: (value) => value?.length,
            then: (rule) => rule.min(8)
        })
},
    ['password', 'password']
);