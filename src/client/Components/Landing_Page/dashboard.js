import React from 'react';
import axios from 'axios';
import TopHeadlines from './TopHeadlines';
// import './landingPage.css';

class dashboard extends React.Component {
  state = {
    loading: true,
    top_headlines: [],
  };

  componentDidMount() {
    const content = [].reduce((a, c) => a.concat(c), []);
    Promise.resolve(
      axios
        .get('http://localhost:3000/api/top-headlines')
        .then((response) => content.push(...response.data.content)),
    ).then(() => {
      this.setState({
        loading: false,
        top_headlines: content,
      });
    });
  }

  render() {
    return (
      <div className="dashboard">
        <div
          className="landing-top-headlines"
          style={{
            borderTop: '2px solid black',
            borderBottom: '2px solid black',
            position: 'relative',
            paddingTop: '0.5rem',
            fontSize: '16px',
          }}
        >
          <h2
            style={{
              marginTop: '0',
              position: 'absolute',
              top: '-11px',
              left: '15px',
              backgroundColor: 'white',
              padding: '0 0.5rem',
              cursor: 'pointer',
              fontSize: '2vmax',
            }}
          >
            Top Headlines
          </h2>
          <div
            style={{
              position: 'absolute',
              top: '-9px',
              fontSize: '12px',
              right: '15px',
              backgroundColor: 'white',
              padding: '0 0.5rem',
              cursor: 'pointer',
            }}
          >
            See All >
          </div>
          {!this.state.loading ? (
            <div className="topHeadlines">
              {this.state.top_headlines.map((headline, index) =>
                index < 6 ? <TopHeadlines top_headlines={headline} key={index} /> : null,
              )}
            </div>
          ) : (
            '... Loading'
          )}
        </div>
      </div>
    );
  }
}

export default dashboard;
