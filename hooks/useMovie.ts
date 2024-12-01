import useSWR from "swr";
import fethcer from "@/lib/fethcer";
import {string} from "prop-types";

const useMovie = (id?: string) => {
    const {
        data,
        error,
        isLoading
    } = useSWR(id ?`/api/movies/${id}` : null, fethcer, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
    }
};

export default useMovie;