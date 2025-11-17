📚 Books REST API

A clean and simple RESTful API for managing books using Node.js and Express.js.
Useful for learning CRUD operations, routing, and REST API fundamentals.

⭐ Features

Full CRUD operations

RESTful API structure

In-memory storage (no database required)

JSON-based request/response

Proper error handling

Clean folder structure (Routes + Controllers)

🛠 Tech Stack

Node.js

Express.js

Postman (for testing)

📁 Project Structure
Books-API/
│
├── server.js
│
├── routes/
│   └── bookRoutes.js
│
├── controllers/
│   └── bookController.js
│
├── package.json
└── README.md

📦 Installation
mkdir books-api
cd books-api
npm init -y
npm install express


Create the folder structure and add the code files.

▶️ Running the Server
node server.js


You should see:

Server running on http://localhost:3000
Access API at http://localhost:3000/api/books

📘 API Endpoints

Below are all supported endpoints with sample responses.

1. GET /books — Get all books

200 OK

{
  "success": true,
  "count": 2,
  "data": [
    { "id": 1, "title": "1984", "author": "George Orwell" },
    { "id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee" }
  ]
}

2. GET /books/:id — Get single book

200 OK

{
  "success": true,
  "data": {
    "id": 1,
    "title": "1984",
    "author": "George Orwell"
  }
}


404 Not Found

{
  "success": false,
  "message": "Book with ID 99 not found"
}

3. POST /books — Create a new book

Request Body

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}


201 Created

{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "id": 3,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
  }
}


400 Bad Request

{
  "success": false,
  "message": "Please provide both title and author"
}

4. PUT /books/:id — Update book

Request Body

{
  "title": "1984 - Updated Edition",
  "author": "George Orwell"
}


Response

{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "id": 1,
    "title": "1984 - Updated Edition",
    "author": "George Orwell"
  }
}

5. DELETE /books/:id — Delete a book
{
  "success": true,
  "message": "Book deleted successfully",
  "data": {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee"
  }
}

🧪 Testing With Postman

Open Postman

Create a collection named Books API

Add requests for each endpoint

Save them with meaningful names

Recommended Test Order

GET all books

POST new book

GET all books

PUT update book

GET book by ID

DELETE book

GET all books again

🧠 Architecture Overview
Request
   ↓
Express Router
   ↓
Controller
   ↓
JSON Response


server.js — Sets up Express and middleware

bookRoutes.js — Defines all routes

bookController.js — Contains CRUD logic
