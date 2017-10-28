import React from 'react';
import { StyleSheet, Text, Image, Dimensions, ScrollView, ListView } from 'react-native';
import axios from 'axios'


export default class Artists extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
        <Image style={styles.img} source={{uri: this.props.pic}}>
          <Text style={styles.genreText}>{this.props.name}</Text>
        </Image>
      )
    }
  }

  const styles = StyleSheet.create({
    img: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: 190,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row',
      margin: 1
    },
    listingText: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,.6)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
      padding: 5,
      // opacity: .5,
    },
    genreText: {
      backgroundColor: 'rgba(173,6,6,.8)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
      padding: 5,
    },
  });
