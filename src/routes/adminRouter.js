import express from 'express'
const router = express.Router()
import { loadDashboard} from '../controllers/admin/dashboardController.js'
import { loadReport } from '../controllers/admin/reportController.js'
import { loadEducation } from '../controllers/admin/educationController.js'
import { loadCommunities } from '../controllers/admin/communityController.js'
import { loadAdminSupport } from '../controllers/admin/supportController.js'

router.get('/dashboard',loadDashboard)
router.get('/report',loadReport)
router.get('/education',loadEducation)
router.get('/community', loadCommunities )
router.get('/support',loadAdminSupport)

export default router