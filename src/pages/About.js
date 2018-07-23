import React, { Component } from 'react';
import AboutContainer from '../containers/about/AboutContainer';

class PageAbout extends Component {

  render() {
    return (
      <div>        
        <div className="container">
          <AboutContainer/>
        </div>        
      </div>
    );
  }
}


export default PageAbout;
