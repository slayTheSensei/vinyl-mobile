import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, StatusBar } from 'react-native';
import axios from 'axios'

// Component Imports
import NavBar from './components/NavBar.js'
import BrowseArtists from './components/BrowseArtists.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavBar />
        <BrowseArtists />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101010',
  },
  status: {
    color: '#fff'
  }
});
