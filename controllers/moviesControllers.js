import { v4 } from 'uuid';
let movies = [
    {
        id: 1,
        name: 'The Shawshank Redemption',
        src: 'https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg'
    },
    {
        id: 2,
        name: 'The Godfather',
        src: 'https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=960&h=540'
    },
    {
        id: 3,
        name: 'Pulp Fiction',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7IE4eldrSWdDB_Jzmx3lp4VBCMnszD8bOw&usqp=CAU'
    },
    {
        id: 4,
        name: 'The Dark Knight',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4i7Rg8vNVjol8LOAXjZOnwhe4IrhFENR7A&usqp=CAU'
    },
    {
        id: 5,
        name: 'Forrest Gump',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMSrjs3rJAFCYw4WEON8IqZnABopanTIWGA&usqp=CAU'
    }
];

const getMovieById = (id) => {
    return movies.find((movie) => movie.id == id);
};

const moviesControllers = {
    getMovies: (req, res) => {
        res.status(200).render('movies', { movies: movies });
    },

    getOneMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = getMovieById(id);
        if (movieExist) {
            res.status(200).render('movies', { movies: [movies[id]] });
        } else {
            res.status(404).render('404', {
                errorStatus: '404',
                title: 'Page not found',
                message: `This page doesn't exist`
            });
        }
    },

    addMovie: (req, res) => {
        const { name, src } = req.body;
        const newMovie = {
            id: String(v4()),
            name: name,
            src: src
        };
        movies.push(newMovie);
        res.status(201).json(newMovie);
    },

    updateMovie: (req, res) => {
        const { id } = req.params;
        const { name, src } = req.body;
        const movieExist = getMovieById(id);

        if (movieExist) {
            const updatedMovie = {
                id: id,
                name: name,
                src: src
            };
            movies.forEach((movie, index) => {
                if (movie.id == id) {
                    movies[index] = updatedMovie;
                    res.status(200).json(updatedMovie);
                }
            });
        } else {
            res.status(404).render('404', {
                errorStatus: '404',
                title: 'Page not found',
                message: `This page doesn't exist`
            });
        }
    },

    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = getMovieById(id);

        if (movieExist) {
            movies = movies.filter((movie) => movie.id != id);
            res.status(200).render('movies', movies);
        } else {
            res.status(404).render('404', {
                errorStatus: '404',
                title: 'Page not found',
                message: `This page doesn't exist`
            });
        }
    }
};

export default moviesControllers;
