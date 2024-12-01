import useSWR  from "swr";
import fethcer from "@/lib/fethcer";

const useMovieList = () => {
    const { data, error, isLoading} = useSWR('/api/movies', fethcer, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,

    });
    return {
        data,
        error,
        isLoading
    }
};
export default useMovieList;
