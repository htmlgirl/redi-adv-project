import React from "react";
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
    if (!Array.isArray(data) || data.length === 0) {
        return null;
    }

    const movieCards: any[] = [];
    data.forEach((movie) => {
        movieCards.push(<MovieCard key={movie.id} data={movie} />);
    });

    return (
        <div className="mb-8">
            <div className="container mx-auto px-4">
                <p className="text-2xl font-bold text-slate-100 mb-4">{title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {movieCards}
                </div>
            </div>
        </div>
    );
};
export default MovieList;