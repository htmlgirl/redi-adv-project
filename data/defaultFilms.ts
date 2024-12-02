
export interface Film {
    id: number;
    title: string;
    year: number;
    cast: string[];
    poster: string;
    creationDate: string;
}


export const defaultFilms: Film[] = [
    {
        id: 1,
        title: 'Inception',
        year: 2010,
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
        creationDate: new Date().toISOString()
    },
    {
        id: 2,
        title: 'The Dark Knight',
        year: 2008,
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
        creationDate: new Date().toISOString()
    },
    {
        id: 3,
        title: 'Interstellar',
        year: 2014,
        cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        poster: 'https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg',
        creationDate: new Date().toISOString()
    },
    {
        id: 4,
        title: 'The Matrix',
        year: 1999,
        cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
        creationDate: new Date().toISOString()
    },
    {
        id: 5,
        title: 'The Shawshank Redemption',
        year: 1994,
        cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
        creationDate: new Date().toISOString()
    },
    {
        id: 6,
        title: 'The Godfather',
        year: 1972,
        cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
        creationDate: new Date().toISOString()
    }
];



