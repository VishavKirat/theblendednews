import express from 'express';
import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';

const url = 'https://newsapi.org/v2';
dotenv.config(path.resolve(__dirname, '../../../../variable.env'));

module.exports.top_headlines = (req, res) => {
  const countriesArr = ['in'];
  let contentCount = 0;
  const newsCluster = [];
  res.setHeader('Content-Type', 'application/json');
  const promises = countriesArr.map((item) =>
    axios
      .get(`${url}/top-headlines?country=${item}&pagesize=100&apiKey=${process.env.NEWS_API_KEY}`)
      .then(
        (payload) => (
          (contentCount = payload.data.totalResults), newsCluster.push(payload.data.articles)
        ),
      ),
  );
  return Promise.all(promises).then(() => {
    const uniqNews = {};
    const newsArr = newsCluster
      .reduce((a, c) => a.concat(c), [])
      .filter((obj) => !uniqNews[obj.title] && (uniqNews[obj.title] = true));
    res.json({ totalResults: contentCount, content: newsArr });
  });
};
