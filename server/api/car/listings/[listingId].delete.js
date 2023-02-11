import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler((evt) => {
    const {listingId} = evt.context.params;
    return prisma.car.delete({
        where: {
            id: parseInt(listingId)
        }
    });
})
