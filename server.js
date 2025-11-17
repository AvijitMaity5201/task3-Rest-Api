const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Books API",
    endpoints: {
      "GET /books": "Get all books",
      "GET /books/:id": "Get single book",
      "POST /books": "Create new book",
      "PUT /books/:id": "Update book",
      "DELETE /books/:id": "Delete book"
    }
  });
});

// Use book routes
app.use('/api', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📚 Access API at http://localhost:${PORT}/api/books`);
});