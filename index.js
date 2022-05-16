import express from 'express';

const app = express();

// middleware
app.use(express.json());
app.use('/', (req, res) => {
  res.send('Hello, Welcome to Home Page');
});

// listen port
app.listen(5000, () => {
  console.log('Server up and running....');
});
