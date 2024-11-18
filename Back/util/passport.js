// import necessary dependencies
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import User from "../models/User";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//initialize 
passport.use(
  new GoogleStrategy(
    {

      clientID: process.env.GOOGLE_CLIENT_ID, // google client id
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // google client secret
      // the callback url added while creating the Google auth app on the console
      callbackURL: "http://localhost:8000/auth/google/callback", 
      passReqToCallback: true,
    },

// returns the authenticated email profile
 async function (request, accessToken, refreshToken, profile, done) {
  try {
    // Check if user exists in database
    const existingUser = await prisma.user.findUnique({
      where: { 
        email: profile.emails[0].value
      } 
    })
    // const existingUser = await User.findOne({ email: profile.emails[0].value });

    if (existingUser) {
      // If user exists, return the user
      return done(null, existingUser);
    }

    // If user doesn't exist, create new user
    const newUser = await prisma.user.create({ 
      data: {
        email: profile.emails[0].value,
        full_name: profile.displayName,
        avatar: profile.photos[0].value,
        username: profile.name.givenName,
        password: "Google",
        verified: true,
      } 
    })

    // apply jwt and generate token and everything

    return done(null, newUser);
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