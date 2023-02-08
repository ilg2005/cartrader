import Joi from "joi";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
    make: Joi.string()
        .required(),

    model: Joi.string()
        .required(),

    year: Joi.number()
        .min(1886)
        .max(2023)
        .required(),

    miles: Joi.number()
        .min(0)
        .required(),

    city: Joi.string()
        .min(2)
        .required(),

    seats: Joi.number()
        .min(1)
        .max(200)
        .required(),

    features: Joi.array()
        .items(Joi.string())
        .required(),

    description: Joi.string()
        .required(),

    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    name: Joi.string().required(),

});


export default defineEventHandler(async (evt) => {
    const body = await readBody(evt);
    const {error, value} = await schema.validate(body);
    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        });
    }

    const {
        make,
        model,
        year,
        miles,
        city,
        seats,
        features,
        description,
        image,
        listerId,
        price,
        name
    } = body;

    const car = await prisma.car.create({
        data: {
            make,
            model,
            year,
            miles,
            city: city.toLowerCase(),
            seats,
            features,
            description,
            image,
            listerId,
            price,
            name
        }
    });

    return car;
});
