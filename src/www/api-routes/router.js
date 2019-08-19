import express from 'express';

// initialize Express Routers
const router = express.Router();

router.get('/', (req, res) => {
  res.set('Content-Type', 'text/json');
  res.json({ success: 'you have reached the endpoint' });
});

export default router;
