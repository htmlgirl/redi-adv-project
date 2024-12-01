import React from "react";
import {BsFillPlayFill} from "react-icons/bs";
import FavoriteButton from "@/components/favoriteButton";
// import PlayButton from "@/components/playButton";
import {useRouter} from "next/router";
import {router} from "next/client";

interface MovieCardProps {
    data: {
        id: any;
        title: string;
        description: string;
        thumnailUrl: string;
        genre: string;
        duration: string;
        videoUrl: string;
    };
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    const router = useRouter();
    return (
        <div
            className="bg-slate-700 text-slate-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <img
                src={data.thumnailUrl}
                alt={data.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-violet-600">{data.title}</h2>
                <p className="text-sm text-slate-300 mt-2">{data.genre} • {data.duration}</p>
                <p className="text-sm text-slate-400 mt-4">{data.description}</p>
            </div>

            <div onClick={() => router.push(`watch/${data.id}`)}
                 className="cursor-pointer mb-4 w-14 h-14 mx-4 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-all duration-200">
                <BsFillPlayFill className="text-white" size={30}/>
            </div>
            <div>
                <FavoriteButton movieId={data?.id} />
            </div>



        </div>
    );
};

export default MovieCard;
