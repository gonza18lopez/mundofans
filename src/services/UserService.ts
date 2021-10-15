import { getRepository, Repository } from "typeorm";
import { User } from '@models/User';

export default class UserService {
    /**
     * The repository manager
     * 
     * @var Repository<User>
     */
    private repository: Repository<User>;

    /**
     * Create a new UserService instance
     * 
     * @return void
     */
    constructor() {
        this.repository = getRepository(User)
    }

    /**
     * Get all users
     */
    async getAll() {
        return await this.repository.find()
    }
}