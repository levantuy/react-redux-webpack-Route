import React, { Component } from 'react';
import NoticesList from '../containers/home/HomeContainer';

class NoticesIndex extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <NoticesList />
        </div>
      </div>
    );
  }
}


export default NoticesIndex;
