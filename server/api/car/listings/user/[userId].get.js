import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (evt) => {
    const {userId} = evt.context.params;
    return prisma.car.findMany({
        where: {
            listerId: userId
        },
        select: {
            image: true,
            id: true,
            name: true,
            price: true
        }
    })
});
