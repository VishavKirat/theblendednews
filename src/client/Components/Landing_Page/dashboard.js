import React from 'react';
import axios from 'axios';
import TopHeadlines from './TopHeadlines';

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
        {!this.state.loading ? (
          <div className="topHeadlines">
            {this.state.top_headlines.map((headline, index) => (
              <TopHeadlines top_headlines={headline} key={index} />
            ))}
          </div>
        ) : (
          '... Loading'
        )}
      </div>
    );
  }
}

export default dashboard;
