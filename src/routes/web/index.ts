import { Router } from 'express'
import ApplicationController from '@controllers/ApplicationController'

/**
 * Create a new Router instance
 * 
 * @var Router
 */
const router: Router = Router()

/**
 * The root path
 */
router.all('*', ApplicationController.index)

/**
 * Export the router instance by default
 */
export default router