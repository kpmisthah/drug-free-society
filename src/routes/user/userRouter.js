import express from "express";
import { loadReport } from "../../controllers/user/reportController.js";
import { loadHome } from "../../controllers/user/userController.js";
import { loadContent } from "../../controllers/user/userController.js";
import { loadEducation } from "../../controllers/user/educationController.js";
import { loadSupport } from "../../controllers/user/supportController.js";
import { loadCommunity } from "../../controllers/user/communityController.js";
const router = express.Router()
router.get('/',loadContent)
router.get('/home',loadHome)
router.get('/report',loadReport)
router.get('/education',loadEducation)
router.get('/support',loadSupport)
router.get('/community',loadCommunity)

export default router