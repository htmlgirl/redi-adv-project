
import React from 'react';
import FilmCard from './FilmCard';
import { Film } from '@/data/defaultFilms';

const FilmList = ({ films, onDelete }: { films: Film[], onDelete: (id: number) => void }) => {
    return (
        <ul className="films-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 bg-blue-50">
            {films.map(film => (
                <FilmCard key={film.id} film={film} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default FilmList;