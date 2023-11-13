import React, { Component } from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider  appId="process.env.REACT_APP_API_KEY" chatSupport>
        <CustomChat pageId="168772996315932" minimized={false}/>
      </FacebookProvider>    
    );
  }
}