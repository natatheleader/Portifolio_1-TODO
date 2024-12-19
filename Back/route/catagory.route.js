import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { 
  create,
  deleteOne,
  getAll,
  getOne,
  protectedd,
  update
} from '../controller/catagory.controller.js';

const router = express.Router();

router.get('/protected', verifyToken, protectedd);
router.post('/create', verifyToken, create);
router.get('/getAll', verifyToken, getAll);
router.get('/getOne', verifyToken, getOne);
router.put('/update', verifyToken, update);
router.delete('/delete', verifyToken, deleteOne);

export default router;