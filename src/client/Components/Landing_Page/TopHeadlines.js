import React from 'react';

const TopHeadlines = (props) => (
  <div className="topheadline-single">
    <img src={props.top_headlines.urlToImage} alt={props.top_headlines.title} />
    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{props.top_headlines.title}</p>
    <p style={{ fontSize: '14px', marginTop: '0.3rem', lineHeight: '1.3' }}>
      {props.top_headlines.description} <a href="#">Continue Reading >></a>
    </p>
  </div>
);

export default TopHeadlines;
