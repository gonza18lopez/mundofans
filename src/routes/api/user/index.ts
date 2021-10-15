import { Router } from 'express'
import UserController from '@controllers/user/UserController'

/**
 * Create a new Router instance
 * 
 * @var Router
 */
const router: Router = Router()

/**
 * Get all users resource
 */
router.get('/', UserController.index)

/**
 * Export the router instance by default
 */
export default router