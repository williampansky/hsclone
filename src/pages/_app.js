import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '~/store';
import '~/app.css';

import getUserId from '~/lib/user/get-gid';

class MyApp extends App {
  constructor(props) {
    super(props);
    if (typeof window === 'undefined') global.window = {};
  }
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  // componentDidMount() {
  //   getUserId().then(gid => console.log(gid));
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
