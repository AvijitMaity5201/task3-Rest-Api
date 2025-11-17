let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// Counter for generating new IDs
let nextId = 3;

// GET all books
exports.getAllBooks = (req, res) => {
  res.json({
    success: true,
    count: books.length,
    data: books
  });
};

// GET single book by ID
exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  res.json({
    success: true,
    data: book
  });
};

// POST - Create new book
exports.createBook = (req, res) => {
  const { title, author } = req.body;
  
  // Validation
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      message: "Please provide both title and author"
    });
  }
  
  const newBook = {
    id: nextId++,
    title,
    author
  };
  
  books.push(newBook);
  
  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: newBook
  });
};

// PUT - Update book by ID
exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  
  const bookIndex = books.findIndex(b => b.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  // Update book (keep existing values if not provided)
  books[bookIndex] = {
    id: id,
    title: title || books[bookIndex].title,
    author: author || books[bookIndex].author
  };
  
  res.json({
    success: true,
    message: "Book updated successfully",
    data: books[bookIndex]
  });
};

// DELETE - Remove book by ID
exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  const deletedBook = books.splice(bookIndex, 1)[0];
  
  res.json({
    success: true,
    message: "Book deleted successfully",
    data: deletedBook
  });
};