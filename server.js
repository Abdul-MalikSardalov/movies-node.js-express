import express, { urlencoded } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000 || 3005; //dotenv not working

const app = express();

import moviesRoutes from './routes/moviesRoutes.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/movies', moviesRoutes);

app.listen(PORT, (req, res) => {
    console.log(`Server is up and running on port : ${PORT}`);
});
