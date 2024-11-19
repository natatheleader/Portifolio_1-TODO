// import necessary depenencies
import "dotenv/config";
import express from "express";
import passport from "passport";
import session from "express-session";
// import passport.js
import "./util/passport.js"
import { verifyToken } from './middleware/auth.js';

// intialize app and define the server port
const app = express();
const port = process.env.PORT || 8000;

// a middleware to access json data
app.use(express.json());

// use the session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET, // session secret
    resave: false,
    saveUninitialized: false,
  })
);

// initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// a view to check if the server is running properly
app.get("/", (req, res) => {
  res.send(`My Node.JS APP`);
});

// authetication route
app.get("/auth/google", passport.authenticate("google", {
  scope: ["email", "profile"],})
);

// Call back route
app.get("/auth/google/callback", passport.authenticate("google", {
    access_type: "offline",
    scope: ["email", "profile"],
  }), (req, res) => {
    if (!req.user) {
      return res.status(401).json({ 
        success: false,
        message: "Authentication failed" 
      });
    }
    // return user details
    // res.json(req.user)
    res.json({
      success: true,
      message: "Authentication successful",
      token: req.user.token,
      user: {
        id: req.user.id,
        email: req.user.email,
        fullName: req.user.fullName,
        avatar: req.user.avatar,
        username: req.user.username
      }
    });
  }
);

app.post("/logout", (req, res) => {
  try {
    // Clear session
    req.logout((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error during logout",
          error: err.message
        });
      }

      // Destroy session
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Error destroying session",
            error: err.message
          });
        }

        // Clear cookie if you're using one
        res.clearCookie('connect.sid');  // Clear session cookie

        return res.status(200).json({
          success: true,
          message: "Logged out successfully"
        });
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during logout",
      error: error.message
    });
  }
});

// Protected route example
app.get('/protected-route', verifyToken, (req, res) => {
  res.json({ 
    success: true, 
    message: 'Protected data', 
    user: req.user 
  });
});

// a function to start the server  and listen to the port defined
const start = async () => {
  try {
    app.listen(port, () => console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

// call the start function
start();