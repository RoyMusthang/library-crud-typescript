import { Router, Request, Response } from 'express';
import { read } from '../utils';
import StatusCode from '../enums/StatusCode';

const router = Router();
const NotFoundMessage = "Livro não encontrado."

router.get('/', async (req: Request, res: Response) => {
  const data = await fs.readFile('./books.json', 'utf8');
  const books = await read();
  return res.status(200).json(books);
});

router.get('/:isbn', async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const data = await fs.readFile('./books.json', 'utf8');

  const books: Book[] = JSON.parse(data);
  const book = books.find(book => book.isbn === isbn);

  book ? res.status(200).json(book) : res.status(404).json(NotFoundMessage);

});

router.post('/', (req: Request, res: Response) => {

});

router.put('/', (req: Request, res: Response) => {

})

router.delete('/:isbn', (req: Request, res: Response) => {

})

export default router;
