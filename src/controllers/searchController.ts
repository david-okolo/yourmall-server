import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * Index of search route.
 * Takes the search string from the string after trailing "/"
 * 
 * Example http://mysite.com/search/shoe
 * The string "shoe" in the above url could be anything and that value is stored in the request object in the params key
 */
router.get("/:searchString", (request: Request, response: Response) => {
    response.json(request.params);
})

export const searchRouteHandler = router;