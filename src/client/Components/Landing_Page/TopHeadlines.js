import React from 'react';

const styles = {
  width: '100%',
  marginTop: '1rem',
  border: '2px solid black',
};
const TopHeadlines = (props) => (
  <div className="topheadlines" style={styles}>
    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{props.top_headlines.title}</p>
    <p style={{ fontSize: '12px', marginTop: '0.3rem' }}>{props.top_headlines.description}</p>
  </div>
);

export default TopHeadlines;
