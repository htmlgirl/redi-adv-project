import React, { useState, useEffect } from 'react';
import FilmList from '@/components/FilmList';
import FilmForm from '@/components/FilmForm';
import SortMenu from '@/components/SortMenu';
import DeleteModal from "@/components/DeleteModal";
import { richDate } from '@/utils/richDate';
import { defaultFilms, Film } from '@/data/defaultFilms';


const Home = () => {
  // Стейт для фильмов, типа строка для сортировки, и ID фильма для удаления
  const [films, setFilms] = useState<Film[]>([]);
  const [sortType, setSortType] = useState<string>('default');
  const [filmToDelete, setFilmToDelete] = useState<number | null>(null);

  // Загружаем данные из localStorage при монтировании компонента
  useEffect(() => {
    const storedFilms = JSON.parse(localStorage.getItem('keyData') || '[]') as Film[];
    if (storedFilms.length === 0) {
      // Если в localStorage нет фильмов, используем дефолтные
      saveFilms(defaultFilms);
    } else {
      setFilms(storedFilms);
    }
  }, []);

  // Функция для сохранения фильмов в стейт и в localStorage
  const saveFilms = (newFilms: Film[]) => {
    setFilms(newFilms);
    localStorage.setItem('keyData', JSON.stringify(newFilms));
  };

  // Функция для добавления фильма
  const addFilm = (film: Omit<Film, 'id' | 'creationDate'>) => {
    const newFilm: Film = {
      ...film,
      id: Date.now(),
      creationDate: richDate().format('YYYY-MM-DDTHH:mm:ss')
    };
    saveFilms([newFilm, ...films]);
  };

  // Функция для удаления фильма
  const deleteFilm = () => {
    if (filmToDelete !== null) {
      saveFilms(films.filter(film => film.id !== filmToDelete));
      setFilmToDelete(null);
    }
  };

  // Сортировка фильмов в зависимости от типа сортировки
  const sortedFilms = [...films].sort((a, b) => {
    switch (sortType) {
      case 'year-asc': return a.year - b.year;
      case 'year-desc': return b.year - a.year;
      case 'title-asc': return a.title.localeCompare(b.title);
      case 'title-desc': return b.title.localeCompare(a.title);
      default: return 0;
    }
  });

  return (
      <div className="bg-blue-50 min-h-screen">
        <h1 className="bg-blue-400 text-white text-4xl text-center py-6 shadow-lg">Movie wishlist</h1>
        <FilmForm onSubmit={addFilm}/>
        <div className="text-center text-4xl font-medium text-blue-400">Wished movie</div>
        <SortMenu sortType={sortType} onSortChange={setSortType}/>
        <FilmList films={sortedFilms} onDelete={setFilmToDelete}/>
        {filmToDelete !== null && (
            <DeleteModal
                onConfirm={deleteFilm}
                onCancel={() => setFilmToDelete(null)}
            />
        )}
      </div>
  );
};

export default Home;

