import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Logo = props => {
  return <Text style={style.logo}>!K.</Text>;
};

const style = StyleSheet.create({
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#40196d',
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 10,
  },
});

export default Logo;
