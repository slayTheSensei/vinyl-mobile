import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import axios from 'axios'

// Component Imports
import NavBar from './NavBar.js'
import BrowseArtists from './BrowseArtists.js'

export default class Vinyl extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavBar />
        <BrowseArtists artists={this.props.artists} />
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
