import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./movieCard";

interface MovieListProps {
    data: {
        id: string;
        title: string;
        description: string;
        thumnailUrl: string;
        genre: string;
        duration: string;
    }[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="mb-8">
            <div className="container mx-auto px-4">
                <p className="text-2xl font-bold text-slate-100 mb-4">{title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
