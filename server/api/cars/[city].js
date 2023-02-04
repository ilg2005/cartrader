import cars from "@/data/cars.json";
export default defineEventHandler((evt) => {
    const {city} = evt.context.params;
    return cars.filter((car) => car.city.toLowerCase() === city.toLowerCase());
});
