import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler((evt) => {
    const {city} = evt.context.params;
    const {make, minPrice, maxPrice} = getQuery(evt);

    const filters = {
        city: city.toLowerCase()
    };

    if (make && make !== 'any') {
        filters.make = make.toLowerCase();
    }

    if (minPrice || maxPrice) {
        filters.price = {}
    }

    if (minPrice) {
        filters.price.gte = parseInt(minPrice);
    }

    if (maxPrice) {
        filters.price.lte = parseInt(maxPrice);
    }



    return prisma.car.findMany({
        where: filters
    });
});
