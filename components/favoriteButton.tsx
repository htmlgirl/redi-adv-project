import axios from "axios";
import React, {useCallback, useMemo} from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorits";

import {AiOutlinePlus, AiOutlineCheck} from "react-icons/ai";

interface FavoriteButtonProps {
    movieId: string;
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) => {
    const {mutate: mutateFavorites} = useFavorites();
    const {data: currentUser, mutate} = useCurrentUser();

    const isFavorite = useMemo(() =>{
        const list = currentUser?.favoriteIds || [];
        return list.includes(movieId);
    }, [currentUser, movieId]);

    const toggleFavoretes = useCallback(async () =>{
        let response;

        if (isFavorite) {
            response = await axios.delete('./api/favorite', {data: {movieId}});
        } else {
            response = await axios.post('./api/favorite', {movieId});
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds,
        });
        mutateFavorites();
    }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <div onClick={toggleFavoretes}
            className="cursor-pointer mb-4 w-14 h-14 mx-4 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-all duration-200">
            <Icon className="h-5 w-5 text-white" size={30} />
        </div>
    )
}

export default FavoriteButton;