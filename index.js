import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb://localhost:27017/user_role_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (erro) => console.error(error));
db.once('open', async () => {
    
});

// middleware
app.use(express.json());
app.use('/', (req, res) => {
  res.send('Hello, Welcome to Home Page');
});

// listen port
app.listen(5000, () => {
  console.log('Server up and running....');
});
