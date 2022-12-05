import express, { Router } from 'express'
import {
	createNewWorkout,
	getWorkout,
	updateWorkout,
	deleteWorkout
} from '../controllers/workout/workoutController.js'

import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router
	.route('/')
	.post(protect, createNewWorkout)
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkout)
router.route('/:id').get(protect, getWorkout)

export default router
