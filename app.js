const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
