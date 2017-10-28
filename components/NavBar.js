import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class NavBar extends React.Component {
  render() {
    return(
      <View style={styles.header}>
        <Image style={{width: 25, height: 25, margin: 15}} source={{uri: 'https://png.icons8.com/menu/win8/91/ffffff'}}></Image>
        <Image style={{width: 120, height: 50, margin: 5, marginLeft: 20}} source={{uri: 'https://i.imgur.com/RgbXSsg.png'}}></Image>
        <Image style={{width: 25, height: 25, margin: 15}} source={{uri: 'https://png.icons8.com/map/ios7/50/ffffff'}}></Image>
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    header: {
      flex: 0,
      height: 80,
      backgroundColor: '#101010',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
  });
