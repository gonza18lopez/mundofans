import { Router } from 'express'
import user from './user'

/**
 * Create a new Router instance
 * 
 * @var Router
 */
const router: Router = Router()

/**
 * The root path
 */
router.use('/user', user)

/**
 * Export the router instance by default
 */
export default router