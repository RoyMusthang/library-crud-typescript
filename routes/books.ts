import { Router, Request, Response } from 'express';
import { read, write } from '../utils';
import Book from '../interfaces/Book';
import validationBook from '../middlewares/validateBook';
import StatusCode from '../enums/StatusCode';

const router = Router();
const NotFoundMessage = "Livro não encontrado."

router.get('/', async (req: Request, res: Response) => {
  const books = await read();
  return res.status(200).json(books);
});

router.get('/:isbn', async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const books = await read();

  const book = books.find(book => book.isbn === isbn);

  if (!book) return res.status(StatusCode.NOT_FOUND).json(NotFoundMessage);

  return res.status(StatusCode.OK).json(book);

});

router.post('/', validationBook, async (req: Request, res: Response) => {
  const book: Book = req.body;

  const books = await read();
  books.push(book);
  await write(books);
  res.status(StatusCode.CREATED).json(book);
});

router.put('/', (req: Request, res: Response) => {

})

router.delete('/:isbn', (req: Request, res: Response) => {

})

export default router;
