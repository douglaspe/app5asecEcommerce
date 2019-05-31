/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>5àsec Ecommerce</Text>
        <ActivityIndicator size = "large" color = "#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e2d61',
  },
  welcome: {
    color: '#FFF',
    fontSize: 30,
  }
});
