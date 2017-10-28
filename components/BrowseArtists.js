import React from 'react';
import { StyleSheet, Text, Image, Dimensions, ScrollView, ListView } from 'react-native';
import axios from 'axios'

import Artists from './Artists.js'

export default class BrowseArtists extends React.Component {
  render() {
    const results = this.props.artists;
      let artists = results.map((artist, index) =>
        <Artists name={artist.name} genre={artist.genre} pic={artist.image} key={index} />
      );

    return(
      <ScrollView>
        {artists}
      </ScrollView>
      )
    }
  }
