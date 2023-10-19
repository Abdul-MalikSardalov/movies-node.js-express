import { v4 } from 'uuid';
let movies = [
    { id: 1, name: 'The Shawshank Redemption' },
    { id: 2, name: 'The Godfather' },
    { id: 3, name: 'Pulp Fiction' },
    { id: 4, name: 'The Dark Knight' },
    { id: 5, name: 'Forrest Gump' }
];

const getMovieById = (id) => {
    return movies.find((movie) => movie.id == id);
};

const moviesControllers = {
    getMovies: (req, res) => {
        res.status(200).json(movies);
    },

    getOneMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = getMovieById(id);
        if (movieExist) {
            res.status(200).json(movieExist);
        } else {
            res.status(404).json({ message: 'Not exist' });
        }
    },

    addMovie: (req, res) => {
        const { name } = req.body;
        const newMovie = {
            id: String(v4()),
            name: name
        };
        movies.push(newMovie);
        res.status(201).json(newMovie);
    },

    updateMovie: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        const movieExist = getMovieById(id);

        if (movieExist) {
            const updatedMovie = {
                id: id,
                name: name
            };
            movies.forEach((movie, index) => {
                if (movie.id == id) {
                    movies[index] = updatedMovie;
                    res.status(200).json(updatedMovie);
                }
            });
        } else {
            res.status(404).json({ message: 'Not exist' });
        }
    },

    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = getMovieById(id);

        if (movieExist) {
            movies = movies.filter((movie) => movie.id != id);
            res.status(200).json(movies);
        } else {
            res.status(404).json({ message: 'Not exist' });
        }
    }
};

export default moviesControllers;
