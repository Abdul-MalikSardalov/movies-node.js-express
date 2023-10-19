// create our books array
const books = [
    {
        id: 1,
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishYear: 1960
    },
    {
        id: 2,
        name: '1984',
        author: 'George Orwell',
        publishYear: 1949
    },
    {
        id: 3,
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        publishYear: 1813
    },
    {
        id: 4,
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishYear: 1925
    },
    {
        id: 5,
        name: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        publishYear: 1951
    }
];

// func for find id
const getBookById = (id) => {
    return books.find((book) => book.id == id);
};

const booksControllers = {
    getBooks: (req, res) => {
        // the whole way is /api/books/
        res.status(200).json(books);
    },

    getBook: (req, res) => {
        // grab id
        const { id } = req.params;

        const bookExist = getBookById(id);
        if (bookExist) {
            res.status(200).json(bookExist);
        } else {
            res.status(200).json({
                message: `Book with this id doesn't exist`
            });
        }
    },

    addBook: (req, res) => {
        const { name, author, publishYear } = req.body;
        const newBook = {
            id: String(books.length + 1),
            name: name,
            author: author,
            publishYear: publishYear
        };
        books.push(newBook);
        res.status(201).json({ newBook });
    },

    updateBook: (req, res) => {
        const { id } = req.params;
        const { name, author, publishYear } = req.body;
        const bookExist = getBookById(id);

        if (bookExist) {
            books.forEach((book, index) => {
                if (book.id == id) {
                    const updatedBook = {
                        id: id,
                        name: name,
                        author: author,
                        publishYear: publishYear
                    };
                    books[index] = updatedBook;
                    res.status(200).json(updatedBook);
                }
            });
        } else {
            res.status(200).json({ message: `Book with id ${id} not exist` });
        }
    },

    deleteBook: (req, res) => {
        const { id } = req.params;
        const bookExist = getBookById(id);
        if (bookExist) {
            const updatedBooksList = books.filter((book) => book.id != id);
            res.status(200).json(updatedBooksList);
        } else {
            res.status(200).json({ message: `Book with id ${id} not exist` });
        }
    }
};

export default booksControllers;
