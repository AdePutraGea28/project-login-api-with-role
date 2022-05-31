import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/role_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

export default db;
