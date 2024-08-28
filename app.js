const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 },
  { id: 3, name: 'Sam Wilson', email: 'sam@example.com', age: 22 }
];

app.use(express.static('public'));

app.get('/data', (req, res) => {
  res.json(sampleData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
