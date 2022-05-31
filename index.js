import express from 'express';
import UserRoute from './routes/Route.js';
import cors from 'cors';
import db from './config/Database.js';
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(UserRoute);

// listen port
app.listen(5000, () => {
  console.log('Server up and running....');
});
