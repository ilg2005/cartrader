export default async (city, filters) => {
    const {data, refresh, error} = await useFetch(`/api/cars/${city}`, {
        query: {
            ...filters,
        }
    });
    if(error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch cars"
        });
    }

    return {data, refresh};
};

