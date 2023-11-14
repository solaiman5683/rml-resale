import React, { Component } from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider  appId={process.env.REACT_APP_FACEBOOK_APP_ID} chatSupport>
        <CustomChat pageId={process.env.REACT_APP_FACEBOOK_PAGE_ID} minimized={false}/>
      </FacebookProvider>   
    );
  }
}