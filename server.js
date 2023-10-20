import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
<<<<<<< HEAD
import moviesRoutes from './routes/moviesRoutes.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
=======
>>>>>>> e165fcc2bd2943fe4956cd5a9fc930c289c85de1

dotenv.config();

const PORT = 3000 || 3005; //dotenv not working

<<<<<<< HEAD
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const app = express();

=======
const app = express();

import moviesRoutes from './routes/moviesRoutes.js';

>>>>>>> e165fcc2bd2943fe4956cd5a9fc930c289c85de1
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/movies', moviesRoutes);

<<<<<<< HEAD
// set template engine
app.set('view engine', 'ejs'); // telling which template we gonna use
app.set('views', path.join(PATH, 'views')); // telling where the files exist

// serve static folder
app.use(express.static(path.join(PATH, 'public')));

app.use((req, res) => {
    res.status(404).render('404', {
        errorStatus: '404',
        title: 'Page not found',
        message: `This page doesn't exist`
    });
});

=======
>>>>>>> e165fcc2bd2943fe4956cd5a9fc930c289c85de1
app.listen(PORT, (req, res) => {
    console.log(`Server is up and running on port : ${PORT}`);
});
