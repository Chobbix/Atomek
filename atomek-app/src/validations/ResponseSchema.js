import * as yup from 'yup';

export const responseSchema = yup.object().shape({
    type: yup.string().required(),
    text: yup.string()
        .when('type', {
            is: "2",
            then: (rule) => rule.required().min(4).max(400)
        }),
    image: yup.mixed()
        .when('type', {
            is: "1",
            then: (rule) => rule.test(
                'hasFile',
                '${path} has no file',
                (value, context) => value.length > 0
            )
        }),
    note: yup.string().required().max(100)
});