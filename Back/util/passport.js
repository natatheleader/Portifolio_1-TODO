// import necessary dependencies
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//initialize 
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        // Check if user exists in database
        const existingUser = await prisma.user.findUnique({
          where: { 
            email: profile.emails[0].value
          }
        });

        let user;
        if (existingUser) {
          user = existingUser;
        } else {
          // Create new user if doesn't exist
          user = await prisma.user.create({ 
            data: {
              email: profile.emails[0].value,
              full_name: profile.displayName,
              avatar: profile.photos[0].value,
              username: profile.name.givenName,
              verified: true,
            } 
          });
        }

        // Generate token
        const token = generateToken(user);

        // Attach token to user object
        user.token = token;

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// function to serialize a user/profile object into the session
passport.serializeUser(function (user, done) {
  done(null, user);
});

// function to deserialize a user/profile object into the session
passport.deserializeUser(function (user, done) {
  done(null, user);
});

const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user.user_id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};