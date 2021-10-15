import { Request, Response } from "express";

export default {
    /**
     * The application root path
     * 
     * @param req Request
     * @param res Response
     * @returns Pug
     */
    index(req: Request, res: Response) {
        try {
            return res.render('application')
        } catch (error) {
            res.status(500).json({ success: false, message: "Something went wrong" });
        }
    }
}