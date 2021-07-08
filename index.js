const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/webhook', (req, res) => {
  console.log(req.body);
  return res.send('');
});

app.listen(5000, () => console.log('Server Started on Port 5000'));

