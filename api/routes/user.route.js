import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

export default router;
// default export router can be renamed where it is imported
// import userRoutes from './routes/user.route.js';
