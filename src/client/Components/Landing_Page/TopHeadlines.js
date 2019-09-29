import React from 'react';
import {NavLink} from'react-router-dom'

const TopHeadlines = (props) => (
  <div className="topheadline-single">
    <img src={props.top_headlines.urlToImage} alt={props.top_headlines.urlToImage} />
    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{props.top_headlines.title}</p>
    <p style={{ fontSize: '14px', marginTop: '0.3rem', lineHeight: '1.3' }}>
      {props.top_headlines.description} <NavLink to={`/news/${props.top_headlines.title}`}>Continue Reading </NavLink>
    </p>
  </div>
);

export default TopHeadlines
