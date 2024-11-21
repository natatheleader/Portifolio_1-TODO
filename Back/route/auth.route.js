import express from 'express';
import passport from 'passport';
import { verifyToken } from '../middleware/auth.js';
import { 
  googleCallback, 
  logout,
} from '../controller/auth.controller.js';

const router = express.Router();

router.get("/google", passport.authenticate("google", {
  scope: ["email", "profile"],
}));

router.get("/google/callback", 
  passport.authenticate("google", {
    access_type: "offline",
    scope: ["email", "profile"],
  }), 
  googleCallback
);

router.post("/logout", logout);

export default router;
