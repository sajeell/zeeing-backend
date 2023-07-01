const books = require("../data/books.json");

// Get all books
exports.getAllBooks = (req, res) => {
  res.json(books);
};
