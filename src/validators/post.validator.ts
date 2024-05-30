import Joi from "joi";

// створюю новий об'єкт joi
export const postValidator = Joi.object({
    // і встановлюю валідацію відповідну на потрібні поля
    userId: Joi
        .number()
        .min(1)
        .max(10)
        .required()
        .messages({
            "number.min": 'Min allowed value is 1',
            "number.max": 'Max allowed value is 10',
            "number.required.base": 'Age field is required'
        }),
    title: Joi
        .string()
        .max(12)
        .messages({
            "string.max": 'Max allowed length of title is 12 chars'
        }),
    body: Joi
        .string()
        .min(5)
        .max(30)
        .required()
        .messages({
            "string.min": 'Min allowed length of body is 5 chars',
            "string.max": 'Max allowed length of body is 30 chars',
            "string.required.base": 'Body field is required'
        })
});