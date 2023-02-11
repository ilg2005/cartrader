import cars from "@/data/cars.json";

export default defineEventHandler(evt => {
    const {id} = evt.context.params;
    const car = cars.find(car => car.id === parseInt(id));
    if (!car) {
        throw createError({
            statusCode: 404,
            statusMessage: `Car with ID of '${id}' does not exist!`
        })
    }
    return car;
});
