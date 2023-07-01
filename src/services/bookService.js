const books = require("../data/books.json");

// Get all books
exports.getAllBooks = () => {
  return books;
};
