/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'

export default class albums extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Albums" />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  }
});

AppRegistry.registerComponent('albums', () => albums);
