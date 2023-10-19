import express from 'express';
import dotenv from 'dotenv';

// initialize dotenv
dotenv.config();

//create port
const PORT = process.env.PORT || 3005;

// init express
const app = express();

//import router
import bookRoutes from './routes/booksRouters.js';

// parse body
app.use(express.json());

//middleware use routes
app.use('/api/books', bookRoutes); //define the base route

//listen to server
app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});
