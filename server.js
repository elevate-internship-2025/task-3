const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// Root route
app.get('/', (req, res) => {
  res.send('Books API is running. Use /books to see the list.');
});

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ message: "Title and author are required" });
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book by id
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  if (title) book.title = title;
  if (author) book.author = author;
  res.json(book);
});

// DELETE book by id
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  const deletedBook = books.splice(index, 1);
  res.json({ message: "Book deleted", deletedBook });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
