import { Router, Request, Response } from 'express';
import fs from 'fs/promises';
import Book from '../interfaces/Book';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const data = await fs.readFile('./books.json', 'utf8');
  const books: Book[] = await JSON.parse(data);
  return res.status(200).json(books);
});

router.get('/:isbn', (req: Request, res: Response) => {

});

router.post('/', (req: Request, res: Response) => {

});

router.put('/', (req: Request, res: Response) => {

})

router.delete('/:isbn', (req: Request, res: Response) => {

})

export default router;
