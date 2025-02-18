import express from 'express'
const router = express.Router()
import { loadLayout } from '../controllers/admin/layoutController.js'
router.get('/layout',loadLayout)
export default router