import { Router, Request, Response } from 'express';
import { read } from '../utils';
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

router.post('/', (req: Request, res: Response) => {

});

router.put('/', (req: Request, res: Response) => {

})

router.delete('/:isbn', (req: Request, res: Response) => {

})

export default router;
