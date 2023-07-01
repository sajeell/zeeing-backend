const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Get all books
router.get("/books", bookController.getAllBooks);

module.exports = router;
