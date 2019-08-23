import React from 'react';

const styles = {
  width: '100%',
  marginTop: '0.5rem',
  padding: '0 0.5rem',
};
const TopHeadlines = (props) => (
  <div className="topheadlines" style={styles}>
    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{props.top_headlines.title}</p>
    <p style={{ fontSize: '12px', marginTop: '0.3rem' }}>{props.top_headlines.description} <a href="#">Continue Reading >></a></p>
  </div>
);

export default TopHeadlines;
