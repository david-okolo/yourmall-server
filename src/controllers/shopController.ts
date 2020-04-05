import express, { Request, Response } from 'express';


const router = express.Router();

// default shop route to return categories, today's pick, 
router.get("/", (request: Request, response: Response) => {
    response.json(request.params);
})

export const shopRouteHandler = router;