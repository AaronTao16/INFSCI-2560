import express from 'express';
import {getAuthors, addAuthor} from '../controllers/authors.js';

const router = express.Router();

router.get('/', getAuthors);
router.post('/', addAuthor);

export default router;