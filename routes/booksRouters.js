import express from 'express';
import booksControllers from '../controllers/booksControllers.js';

// init router
const router = express.Router(); // router is the small part of express which allow us to divide our code

//use router for get req
router.get('/', booksControllers.getBooks); // not executing because need request first

router.get('/:id', booksControllers.getBook);

router.post('/', booksControllers.addBook);

router.put('/:id', booksControllers.updateBook);

router.delete('/:id', booksControllers.deleteBook);

export default router;
