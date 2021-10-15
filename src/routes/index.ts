import { Router } from 'express'
import api from './api'
import web from './web'

/**
 * Create a new Router instance
 * 
 * @var Router
 */
const router: Router = Router()

/**
 * Read and prepare the web & api routes
 */
router.use('/api', api)
router.use('/', web)

/**
 * Export the router instance by default
 */
export default router