# 📚 Books REST API

A simple RESTful API for managing a collection of books, built with Node.js and Express.js. Perfect for learning REST API fundamentals, CRUD operations, and Express routing.

## 🌟 Features

- **CRUD Operations**: Create, Read, Update, and Delete books
- **RESTful Design**: Follows REST API conventions
- **In-Memory Storage**: No database required (perfect for learning)
- **JSON Responses**: All data exchanged in JSON format
- **Error Handling**: Proper HTTP status codes and error messages
- **Clean Architecture**: Separated routes and controllers

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Postman** - API testing tool

## 📁 Project Structure

```
books-api/
│
├── server.js                  # Main entry point
│
├── routes/
│   └── bookRoutes.js          # API route definitions
│
├── controllers/
│   └── bookController.js      # Business logic for operations
│
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Postman** - [Download here](https://www.postman.com/downloads/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Installation

1. **Clone or create the project folder:**
   ```bash
   mkdir books-api
   cd books-api
   ```

2. **Initialize npm project:**
   ```bash
   npm init -y
   ```

3. **Install dependencies:**
   ```bash
   npm install express
   ```

4. **Create the folder structure and files** as shown in the project structure above

5. **Copy the code** from each file provided in the guide

### Running the Server

```bash
node server.js
```

You should see:
```
✅ Server running on http://localhost:3000
📚 Access API at http://localhost:3000/api/books
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a single book by ID |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

---

### 1. Get All Books

**Request:**
```http
GET /api/books
```

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "1984",
      "author": "George Orwell"
    },
    {
      "id": 2,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    }
  ]
}
```

---

### 2. Get Single Book

**Request:**
```http
GET /api/books/1
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "1984",
    "author": "George Orwell"
  }
}
```

**Error Response:** `404 Not Found`
```json
{
  "success": false,
  "message": "Book with ID 99 not found"
}
```

---

### 3. Create New Book

**Request:**
```http
POST /api/books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "id": 3,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
  }
}
```

**Error Response:** `400 Bad Request`
```json
{
  "success": false,
  "message": "Please provide both title and author"
}
```

---

### 4. Update Book

**Request:**
```http
PUT /api/books/1
Content-Type: application/json

{
  "title": "1984 - Updated Edition",
  "author": "George Orwell"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "id": 1,
    "title": "1984 - Updated Edition",
    "author": "George Orwell"
  }
}
```

---

### 5. Delete Book

**Request:**
```http
DELETE /api/books/2
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee"
  }
}
```

---

## 🧪 Testing with Postman

### Quick Test Collection

1. **Open Postman**
2. **Create a new collection** called "Books API"
3. **Add requests** for each endpoint listed above
4. **Save each request** with descriptive names

### Test Sequence

1. GET all books (verify initial data)
2. POST new book (create)
3. GET all books (verify creation)
4. PUT update book (modify)
5. GET single book (verify update)
6. DELETE book (remove)
7. GET all books (verify deletion)

## 📖 Code Explanation

### Server Architecture

```
Request → Express Router → Controller Function → Response
```

1. **server.js** - Entry point, sets up Express and middleware
2. **bookRoutes.js** - Defines URL paths and maps to controllers
3. **bookController.js** - Contains business logic for each operation

### Key Concepts

**Middleware:**
```javascript
app.use(express.json()); // Parses incoming JSON
```

**Routing:**
```javascript
router.get('/books', controller.getAllBooks);
```

**Request Parameters:**
```javascript
req.params.id  // URL parameters (/books/:id)
req.body       // Request body (POST/PUT data)
```

**Response Methods:**
```javascript
res.json()     // Send JSON response
res.status()   // Set HTTP status code
```

## 🔧 Common Issues & Solutions

### Port Already in Use
```bash
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** Stop the running server (Ctrl+C) or change the port in `server.js`

### Cannot Find Module
```bash
Error: Cannot find module 'express'
```
**Solution:** Run `npm install express`

### Cannot GET /books
**Problem:** Missing `/api` prefix  
**Solution:** Use `http://localhost:3000/api/books`

### JSON Not Parsed
**Problem:** Forgot `express.json()` middleware  
**Solution:** Verify it's in `server.js`

## 📚 Learning Resources

- [Express.js Official Docs](https://expressjs.com/)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpstatuses.com/)
- [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## 🎯 Next Steps

### Beginner Enhancements
- [ ] Add a `genre` field to books
- [ ] Implement search functionality
- [ ] Add pagination (limit, offset)
- [ ] Return total count in responses

### Intermediate Enhancements
- [ ] Add input validation (express-validator)
- [ ] Implement error handling middleware
- [ ] Add logging with Morgan
- [ ] Create automated tests with Jest

### Advanced Features
- [ ] Connect to MongoDB database
- [ ] Add user authentication (JWT)
- [ ] Implement rate limiting
- [ ] Deploy to cloud (Heroku/Railway)

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

Your Name - Learning REST APIs with Node.js

---

**Happy Coding! 🚀**

If you have questions or run into issues, feel free to reach out or open an issue on GitHub.
