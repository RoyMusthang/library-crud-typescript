// ./index.ts

import express from 'express';
import books from './routes/books';

const app = express();

const PORT = 8000;

app.get('/', (_req, res) => {
  res.send('Express + TypeScript')
});

app.use('/books', books);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
