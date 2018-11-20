import React from 'react';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://appfel.com.br/'}}
        style={{marginTop: 20}}
      />
    );
  }
}