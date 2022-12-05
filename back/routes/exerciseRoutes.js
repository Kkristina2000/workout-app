import express, { Router } from 'express'
import {
	createNewExercise,
	updateExercise,
	deleteExercise,
	getExercises
} from '../controllers/exercise/mainController.js'
import { createNewExerciseLog } from '../controllers/exercise/log/createController.js'
import {
	updateExerciseLog,
	updateCompleteExerciseLog
} from '../controllers/exercise/log/updateController.js'
import { getExerciseLog } from '../controllers/exercise/log/getController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router
	.route('/')
	.post(protect, createNewExercise)
	.put(protect, updateExercise)
	.delete(protect, deleteExercise)
	.get(protect, getExercises)

router
	.route('/log')
	.post(protect, createNewExerciseLog)
	.put(protect, updateExerciseLog)

router.route('/log/completed').put(protect, updateCompleteExerciseLog)

router.route('/log/:id').get(protect, getExerciseLog)

export default router
