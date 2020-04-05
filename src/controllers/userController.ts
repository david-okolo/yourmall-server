import express, { Request, Response } from "express";
import passport from "passport";
import { createToken } from "../utils/operationalSupport";

const router = express.Router();

/**
 *  function calls below are request handlers
 */
router.get("/", passport.authenticate('jwt', { session: false }), (request: Request, response: Response) => {
    response.json({
        message: "Users GET route",
        status: 200
    })
})

router.post("/create", (request: Request, response: Response) => {
    response.json({
        token: createToken(request.body, process.env.JWT_KEY)
    })
})

export const usersRouteHandler = router;