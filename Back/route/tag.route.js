import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { 
  create,
  deleteOne,
  getAll,
  getOne,
  update
} from '../controller/tag.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getAll', verifyToken, getAll);
router.get('/getOne/:id', verifyToken, getOne);
router.put('/update', verifyToken, update);
router.delete('/delete/:id', verifyToken, deleteOne);

export default router;