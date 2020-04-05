import express, { Request, Response, Router } from "express";
import passport from "passport";

const router: Router = express.Router();

router.get("/:userId", passport.authenticate('jwt', {session: false}), (request: Request, response: Response) => {
    response.send(request.user);
})

export default router;