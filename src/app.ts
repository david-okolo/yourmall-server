import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { usersRouteHandler } from './controllers/userController';
import { shopRouteHandler } from './controllers/shopController';
import { searchRouteHandler } from './controllers/searchController';
import profileRouteHandler from './controllers/profileController';
import passport from 'passport';
import { jwtStrategy } from './config/passport';
import { connect } from './config/database';

const app = express();

// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
// mongoose.connection.on("error", (err) => {
//     console.log("MongoDB Error: "+err)
// })
// mongoose.connection.on("connected", () => {
//     console.log("MongoDB connected")
// })

connect();

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
passport.use(jwtStrategy);

/**
 * Routes
 */
app.use("/users", usersRouteHandler);
app.use("/shop", shopRouteHandler);
app.use("/search",  searchRouteHandler);

app.use("/profile", profileRouteHandler)

app.get("/", (request: Request, response: Response) => {
    response.send("Hello");
})

export default app;