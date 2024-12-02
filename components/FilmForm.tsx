import { useState } from 'react';

const FilmForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        cast: '',
        poster: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const castArray = formData.cast.split(',').map(person => person.trim());
        onSubmit({
            ...formData,
            cast: castArray
        });
        setFormData({ title: '', year: '', cast: '', poster: '' }); // очистка формы
    };

    return (
        <form onSubmit={handleSubmit} id="film_form" className="max-w-lg mt-20 mb-20 mx-auto p-6 bg-blue-50 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-medium text-blue-400">Please add your movies here</h2>
            <div>
                <label htmlFor="title" className="block text-sm font-semibold text-blue-900">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
                />
            </div>

            <div>
                <label htmlFor="year" className="block text-sm font-semibold text-blue-900">Year</label>
                <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
                />
            </div>

            <div>
                <label htmlFor="cast" className="block text-sm font-semibold text-blue-900">Cast (comma separated)</label>
                <input
                    type="text"
                    id="cast"
                    name="cast"
                    value={formData.cast}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
                />
            </div>

            <div>
                <label htmlFor="poster" className="block text-sm font-semibold text-blue-900">Poster URL</label>
                <input
                    type="url"
                    id="poster"
                    name="poster"
                    value={formData.poster}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
                Add Film
            </button>
        </form>
    );
};

export default FilmForm;
