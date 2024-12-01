import useSWR  from "swr";
import fethcer from "@/lib/fethcer";

const useFavorites = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/favorites', fethcer, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,

    });
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useFavorites;