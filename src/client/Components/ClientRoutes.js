import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import dashboard from './Landing_Page/dashboard';
import SingleNewsPost from './SingleNewsPost';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>The Blended Ink</h1>
        <Route exact path="/" component={dashboard} />
        <Route exact path="/news/:id" component={SingleNewsPost} />
      </BrowserRouter>
    );
  }
}

export default AppRouter;
