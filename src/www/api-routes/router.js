import express from 'express';
import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';

// initialize Express Routers
const router = express.Router();
const url = 'https://newsapi.org/v2';
dotenv.config(path.resolve(__dirname, '../../../../variable.env'));

router.get('/everything', (req, res) => {
  res.set('Content-Type', 'text/json');
  // `${url}/everything/${process.env.NEWS_API_KEY}`
  Promise.resolve(
    axios
      .get(`${url}/everything?q=name&apiKey=${process.env.NEWS_API_KEY}`)
      .then((payload) => res.json(payload.data)),
  )
    .then(() => console.log('done!!'))
    .catch((err) => console.log(err));
});

export default router;
