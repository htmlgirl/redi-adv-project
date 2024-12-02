import React from 'react';

const FilmCard = ({ film, onDelete }: { film: Film, onDelete: (id: number) => void }) => {
    const handleDelete = () => onDelete(film.id);

    return (
        <li className="bg-blue-100 rounded-lg shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="film-img relative">
                <img
                    src={film.poster}
                    alt={`${film.title} poster`}
                    className="w-full h-64 object-contain"
                />
                <button
                    className="film-del text-white bg-red-500 hover:bg-red-400 rounded-full p-2 w-8 h-8 flex items-center justify-center absolute top-2 right-2 shadow-lg"
                    onClick={handleDelete}
                >
                    ✕
                </button>
            </div>

            <div className="film-info p-4 flex-1">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{film.title}</h3>
                <p className="text-gray-700">Release Year: {film.year}</p>
                <p className="text-gray-700">Cast: {film.cast.join(', ')}</p>
            </div>
        </li>

    );
};

export default FilmCard;