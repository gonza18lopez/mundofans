import { Request, Response } from "express";

export default {
    /**
     * Get all users
     * 
     * @param req Request
     * @param res Response
     * @returns Pug
     */
    index(req: Request, res: Response) {
        return res.json({
            message: 'View all users'
        })
    }
}