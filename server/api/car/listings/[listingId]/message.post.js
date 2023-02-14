import Joi from "joi";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
    name: Joi.string()
        .required(),

    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {allow: ["com", "net"]}
    })
        .required(),

    phone: Joi.string()
        .required(),

    message: Joi.string()
        .min(2)
        .required(),
});

export default defineEventHandler(async (evt) => {
    const {listingId} = evt.context.params;
    const body = await readBody(evt);
    const {error} = await schema.validate(body);
    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        });
    }

    return prisma.message.create({
        data: {
            name:  body.name,
            email:  body.email,
            phone: body.phone,
            message: body.message,
            listingId: parseInt(listingId)
        }
    });

});
