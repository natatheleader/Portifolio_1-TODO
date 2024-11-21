import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { 
  protectedd
} from '../controller/catagory.controller.js';

const router = express.Router();

router.get('/protected', verifyToken, protectedd);

export default router;