import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, StatusBar } from 'react-native';
import axios from 'axios'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
         barStyle="light-content"
        />
        <View style={styles.header}>
          <Image style={{width: 25, height: 25, margin: 15}} source={{uri: 'https://png.icons8.com/menu/win8/91/ffffff'}}></Image>
          <Image style={{width: 120, height: 50, margin: 5, marginLeft: 20}} source={{uri: 'https://i.imgur.com/RgbXSsg.png'}}></Image>
          <Image style={{width: 25, height: 25, margin: 15}} source={{uri: 'https://png.icons8.com/map/ios7/50/ffffff'}}></Image>
        </View>
        <ScrollView>
          <Image style={styles.img} source={{uri: 'https://i.imgur.com/XBtxuap.jpg'}}>
            <Text style={styles.listingText}>Where's Nasty</Text>
            <Text style={styles.genreText}>Hip Hop</Text>
          </Image>
          <Image style={styles.img} source={{uri: 'https://i.imgur.com/0iYw8hW.jpg'}}>
            <Text style={styles.listingText}>Slick Vick</Text>
            <Text style={styles.genreText}>EDM</Text>
          </Image>
          <Image style={styles.img} source={{uri: 'https://i.imgur.com/kfmkWaP.jpg'}} >
              <Text style={styles.listingText}>DJ Ayres</Text>
              <Text style={styles.genreText}>Hip Hop</Text>
          </Image>
          <Image style={styles.img} source={{uri: 'https://i.imgur.com/wXInI4a.jpg'}} >
            <Text style={styles.listingText}>Slay the Sensei</Text>
            <Text style={styles.genreText}>Latin</Text>
          </Image>
          <Image style={styles.img} source={{uri: 'https://i.imgur.com/oNIxDL2.jpg'}}>
              <Text style={styles.listingText}>Young Pval</Text>
              <Text style={styles.genreText}>Reggae</Text>
          </Image>
          <Image style={styles.img} source={{uri: 'https://i.imgur.com/Utekz3v.jpg'}}>
              <Text style={styles.listingText}>DJ Lefty</Text>
              <Text style={styles.genreText}>R&B</Text>
          </Image>
        </ScrollView>
      </View>
    );
  }
}

// CSS
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // flexDirection: 'column',
  },
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
    backgroundColor: 'rgba(173,6,6,.7)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
  header: {
    flex: 0,
    height: 80,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',

  },
  navElements: {
    margin: 15,
    color: '#fff',
    fontSize: 15
  },
  status: {
    color: '#fff'
  }
});
