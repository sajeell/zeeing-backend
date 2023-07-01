const { getAllBooks } = require("../services/bookService");

// Get all books
exports.getAllBooks = (req, res) => {
  const books = getAllBooks();
  res.json(books);
};
