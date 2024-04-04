import express from 'express';
import { getBook } from '../Controller/book_control.js';

const router=express.Router();

router.get("/",getBook)

export default router;