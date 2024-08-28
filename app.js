// Import the Express.js framework, which is used to build web applications in Node.js
const express = require("express");

// Import the path module to work with file and directory paths
const path = require("path");

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will listen for incoming requests
const port = 3000;

// Sample data to be served as JSON. This could be fetched from a database in a real-world application.
const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
  { id: 3, name: "Sam Wilson", email: "sam@example.com", age: 22 },
];

// Serve static files from the "public" directory. This can include HTML, CSS, JS, and image files.
app.use(express.static("public"));

// Define a GET route for "/data" that sends the sampleData array as a JSON response
app.get("/data", (req, res) => {
  res.json(sampleData); // Respond with the sampleData array in JSON format
});

// Start the server and have it listen on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Log a message when the server is up and running
});
