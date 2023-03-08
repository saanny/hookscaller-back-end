import Joi from "joi";

const inputCreateItem = {
    body: {
        hours: Joi.number().required(),
        minutes: Joi.number().required(),
        seconds: Joi.number().required(),
        webhookUrl: Joi.string().required()
    },
};

const inputGetItem = {
    params: {
        id: Joi.string().required(),
    },
};

export {
    inputCreateItem,
    inputGetItem
}