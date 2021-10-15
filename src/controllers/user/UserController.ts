import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from '@models/User';

export default {
    /**
     * Get all users
     * 
     * @param req Request
     * @param res Response
     * @returns Pug
     */
    async index(req: Request, res: Response) {
        // get repository
        const repository = getRepository(User)

        // get users
        const users = await repository.find()

        return res.json(users)
    }
}