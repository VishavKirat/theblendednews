import express from 'express';
import allAPIControllers from '../api-controllers';

// initialize Express Routers
const router = express.Router();
router.get('/top-headlines', allAPIControllers.top_headlines);

export default router;
