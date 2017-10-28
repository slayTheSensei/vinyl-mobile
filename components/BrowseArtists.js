import React from 'react';
import { StyleSheet, Text, Image, Dimensions, ScrollView } from 'react-native';
import axios from 'axios'


export default class BrowseArtists extends React.Component {
  render() {
    return(
      <ScrollView>
        <Image style={styles.img} source={{uri: 'https://i.imgur.com/XBtxuap.jpg'}}>
          <Text style={styles.genreText}>Wheres Nasty?</Text>
        </Image>
        <Image style={styles.img} source={{uri: 'https://i.imgur.com/0iYw8hW.jpg'}}>
          <Text style={styles.genreText}>Slick Vick</Text>
        </Image>
        <Image style={styles.img} source={{uri: 'https://i.imgur.com/kfmkWaP.jpg'}} >
            <Text style={styles.genreText}>DJ Ayres</Text>
        </Image>
        <Image style={styles.img} source={{uri: 'https://i.imgur.com/wXInI4a.jpg'}} >
          <Text style={styles.genreText}>Slay the Sensei</Text>
        </Image>
        <Image style={styles.img} source={{uri: 'https://i.imgur.com/oNIxDL2.jpg'}}>
            <Text style={styles.genreText}>Young Pval</Text>
        </Image>
        <Image style={styles.img} source={{uri: 'https://i.imgur.com/Utekz3v.jpg'}}>
            <Text style={styles.genreText}>DJ Lefty</Text>
        </Image>
      </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    listing: {
      backgroundColor: 'gray',
      borderWidth: 1,
      padding: 10,
      margin: 5,
    },
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
    overlay: {
      flex: 1,
      backgroundColor: 'black',
      opacity: .5,
      height: 190,
      width: Dimensions.get('window').width,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    genreText: {
      backgroundColor: 'rgba(173,6,6,.8)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
      padding: 5,
    },
  });
