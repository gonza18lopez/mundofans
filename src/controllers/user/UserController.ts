import { Request, Response } from "express"
import UserService from '@services/UserService'

class UserController {
    /**
     * User controller constructor
     * 
     * @param req Request
     * @param res Response
     * @returns 
     */
    constructor() {
        // 
    }

    /**
     * Get all users
     * 
     * @param req Request
     * @param res Response
     * @returns Pug
     */
    async index(req: Request, res: Response) {
        // create service instance
        const service = new UserService()

        // get all users
        const users = await service.getAll()

        return res.json(users)
    }
}

export default new UserController()