
# Task 3 — Books REST API (Node.js + Express)

This repository contains my submission for **Task 3** of the Web Development Internship.

A small REST API built with **Node.js** and **Express** that manages a list of books (in-memory). The API implements basic CRUD operations: **Create**, **Read**, **Update**, and **Delete**.


## 📌 Features
- GET `/books` — list all books
- POST `/books` — add a new book
- PUT `/books/:id` — update a book by ID
- DELETE `/books/:id` — delete a book by ID
- Root route `/` gives a small status message

Here the Data is stored in memory (an array). The data resets when the server restarts.


## 🛠 Tech stack
- Node.js
- Express
- Tested with Postman / curl

