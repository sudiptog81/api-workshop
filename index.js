const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

let books = [{
  isbn: "1234",
  title: 'A good book',
  author: 'Someone Famous',
  sales: {
    amount: 10
  }
}];

app.get('/api/v1/books', (req, res) => res.json({ data: books }));

app.get('/api/v1/books/:isbn', (req, res) => res.json({
  data: books.find((book) => book.isbn === req.params.isbn)
}));

app.get('/api/v1/books/:isbn/sales', (req, res) => res.json({
  data: books.find((book) => book.isbn === req.params.isbn).sales
}));

app.post('/api/v1/books', (req, res) => {
  books.push(req.body);
  res.json({ data: books });
});

app.put('/api/v1/books', (req, res) => {
  bookIdx = books.findIndex((book) => book.isbn === req.body.isbn);
  delete req.body.isbn;
  for (const key in req.body) {
    books[bookIdx][key] = req.body[key];
  }
  res.json({ data: books });
});

app.delete('/api/v1/books/:isbn', (req, res) => {
  books = books.filter((book) => book.isbn !== req.params.isbn);
  res.json({ data: books });
});

app.listen(5000, () => console.log('Server Started on Port 5000'));

